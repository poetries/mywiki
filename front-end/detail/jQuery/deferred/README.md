# Deferred 介绍
在写 JavaScript 时，我们常常需要会写一些异步代码，如：异步去服务器端获取一些数据，当数据返回时做一些操作。代码可能是这个样子
```
function aysnFetchData(callbackFn){
  // 异步回来时执行 callbackFn
}
aysnFetchData(doSthFn);
```

上面是最简单的情况。但当异步比较复杂的时候，代码会比较难组织。 

jQuery 的 Deferred 是用来组织异步代码的。

## 基本写法
1. 创建 Deferred 对象 `var dfd = $.Deferred();`
1. 创建 Promise 对象 `var promise = dfd.promise();`
1. 异步代码执行后，若成功，在 Deferred 对象上执行 `dfd.resolve(data)`，失败则执行 `dfd.reject(error)`
1. 当执行 `dfd.resolve(data)` 后，框架代码会执行 `promise.done(data)`；执行 `dfd.reject(error)` 后框架代码会执行 `promise.fail(data)`。

关于 Promise 的介绍，见 MDN 的 [Promise 介绍](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

示例代码如下
```
function doThingA() {
    var dfd = $.Deferred(); // 创建 Deferred 对象
    /*
     * 一些异步代码
     * 异步回来后
     * 若成功则执行 dfd.resolve(data)
     * 若失败则执行 dfd.reject(error)
     */
    return dfd.promise();
}
/*
*  doThingA 中执行 dfd.resolve 后执行 successFn
*  doThingA 中执行 dfd.reject 后执行 failFn
*  doThingA 中执行 dfd.resolve 或 dfd.reject 均执行 alwaysFn
*/
doThingA.done(successFn).fail(failFn).always(alwaysFn);
```

jQuery 的 $.ajax 返回的就是一个 Promise 对象。如
```
$.ajax({
  //...
}).done(successFn).fail(failFn)；
```

下面我会结合具体情况来介绍 Deferred 的使用。

## 串行的异步操作
假设要执行 n 个异步操作。其中第 n 个操作要在第 n - 1 个操作完成后才能执行。我们可能会这么写
```
/*
* 异步回来后 若成功则执行successFn,失败执行 failFn
*/
function doTing1(successFn, failFn){
}
function doTing2(successFn, failFn){
}
// ...
/*
* dataArr 为 doTing1，doTing2 ... 执行操作拿到的数据
*/
function doTingN(dataArr){
}

doThing1(function(data1){
  var dataArr = [];
  dataArr.push(data1);
  doThing2(function(data2){
      dataArr.push(data2);
      //嵌套很多层 ... doThingN(dataArr)
  }, doTing2FailFn);
}, doTing1FailFn);
```
乱糟糟的感觉。

如果用 Deferred 这么写
```
function doThing1() {
    var dfd = $.Deferred();
    /*
    * 一些异步代码
    * 异步回来后
    * 若成功则执行 dfd.resolve(data)
    * 若失败则执行 dfd.reject(error)
    */
    return dfd.promise();
}

function doThing2(data) {
    dataArr.push(data);
    var dfd = $.Deferred();
    /*
    * 一些异步代码
    * 异步回来后
    * 若成功则执行 dfd.resolve(data)
    * 若失败则执行 dfd.reject(error)
    */
    return dfd.promise();
}

// ...
function doTingN(dataArr){
}

var dataArr = [];

doThing1()
  .done(doThing2).fail(doTing1FailFn)
  .done(doThing3).fail(doTing2FailFn)
  // ...
  .done(doThingN).fail(doTingNMinus1FailFn);
```

是不是清晰了很多~

## 并行的异步操作
假设要执行 n 个异步操作。第 1 到 n - 1 个操作可以并行执行。第 n 个操作要在前 n - 1 个操作完成后才能执行。我们可能会这么写
```
var totalAysnNum = n;
var executedAysnNum = 0;
var dataArr = [];
/*
* 异步回来后 若成功则执行successFn,失败执行 failFn
*/
function doTing1(successFn, failFn){
   /*
    * 一些异步代码
    * 异步回来后
    * 若成功则执行
    executedAysnNum++;
    data[0] = data;
    if(executedAysnNum === totalAysnNum){
      successFn(dataArr)
    }
    * 若失败则执行 failFn
    */
}
function doTing2(successFn, failFn){
/*
    * 一些异步代码
    * 异步回来后
    * 若成功则执行
    executedAysnNum++;
    data[1] = data;
    if(executedAysnNum === totalAysnNum){
      successFn(dataArr)
    }
    * 若失败则执行 failFn
    */
}
// ...
/*
* dataArr 为 doTing1，doTing2 ... 执行操作拿到的数据
*/
function doTingN(dataArr){
}

doThing1(doTingN, failFn);
doThing2(doTingN, failFn);
// ...
```

如果用 Deferred 这么写
```
function doThing1() {
    var dfd = $.Deferred();
    /*
    * 一些异步代码
    * 异步回来后
    * 若成功则执行 dfd.resolve(data)
    * 若失败则执行 dfd.reject(error)
    */
    return dfd.promise();
}

function doThing2() {
    var dfd = $.Deferred();
    /*
    * 一些异步代码
    * 异步回来后
    * 若成功则执行 dfd.resolve(data)
    * 若失败则执行 dfd.reject(error)
    */
    return dfd.promise();
}

// ...
function doTingN(data1, data2 ...){
}


$.when(doThing1, doThing2, ..., doThingN)
  .done(doTingN).fail(failFn);
```

## 串行与并行的混合
假设要执行 4 个异步操作。第 1 个和第 2 个操作可以并行执行，然后执行第 3 个，然后执行第 4 个。用 Deferred 这么写
```
$.when(doThing1, doThing2)
  .done(doThing3)
  .done(doThing4);
```

## jQuery Defferred 的一些具体 Demo
```
// 让某元素淡出后淡入
$('.tar').fadeOut().promise().done(function() {
    $('.tar').fadeIn();
});
// 让某元素淡出后，1 秒后淡入
$('.tar').fadeOut().delay(1000).fadeIn();
```
## 其他
更多 Deferred 相关的方法见 [jQuery 官方文档](http://api.jquery.com/category/deferred-object/)。

## 推荐阅读
*  [JavaScript Promise迷你书（中文版）](http://liubin.org/promises-book/javascript-promise-book.pdf)
* [What is a Promise, and what is the difference between a Promise and a Deferred object? (in JavaScript (ES6), or jQuery)](http://kenneth-kin-lum.blogspot.co.id/2015/11/what-is-promise-and-what-is-difference.html)

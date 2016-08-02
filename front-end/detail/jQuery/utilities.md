# 工具方法
## $.grep( array, function [, invert ] )
从数组中查找满足条件的元素。
```
// 查找数组中大于3的元素
$.grep([1,8,2,4], function(item, index){
	return item > 3;
});
// 输出 [8, 4]
```

## $.makeArray(obj)
将`array-like`的对象转化成数组。
`array-like`的对象有length属性，但没有数组的方法，也不能被`for-in`来遍历。
常见的`array-like`的对象有函数的参数` arguments`， `document.getElementsByTagName()`的返回值和`document.forms`。
```
// 将函数的参数相加
function add(){
	var args = arguments;
	args = $.makeArray(args);
	var sum = 0;
	args.forEach(function(each){
		sum += each;
	});
	return sum;
}
add(1,2,3);//输出6
```
## $.inArray( value, array [, fromIndex ] )
数组中是否有指定元素，如果有，返回该元素所在数组中的下标，否则返回-1。
等同于Array.prototype.indexOf(value[, fromIndex])。但IE8-不支持Array.prototype.indexOf。

```
$.inArray(3,[1,2,3]); // 返回2
$.inArray(4,[1,2,3]); // 返回-1
```

## $.extend( [deep ], target, object1 [, objectN ] )
将object1 到objectN 的所有对象合并到target上，如果deep为true，则深度合并。
```
var a = {a:3};
var b = {b:4};
var c = {a:5,c:3};
$.extend(a,b,c);
a;//输出{ a:5,  b:4,  c:3}
b;//输出{b:4}
c;//输出{a:5,c:3}
```

## $.trim( str )
去除字符串前后的空格
```
$.trim("    hello, how are you?    ");//输出"hello, how are you?"
```
## 类型判断
* $.isArray() 是否是数组
* $.isFunction() 是否是方法
* $.isNumeric() 是否是数组
* $.isEmptyObject() 是否是空对象
* $.isPlainObject() 是否是PlainObject。PlainObject的定义见[这里](http://api.jquery.com/Types/#PlainObject)

## $.now()
返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。
等效于 `(new Date).getTime()`。
也等效于`Date.now()`。IE8-不支持`Date.now()`。

## $.noop()
返回一个空函数。
在写组件时，用这个方法可作为有些回调的默认值。


[更多](http://api.jquery.com/category/utilities/)
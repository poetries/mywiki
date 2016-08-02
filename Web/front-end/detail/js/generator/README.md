# generator函数
ECMAScript 6 引入了generator函数，作用就是返回一个内部状态的遍历器，主要特征是函数内部使用了yield语句。

当调用generator函数的时候，该函数并不执行，而是返回一个遍历器（可以理解成暂停执行）。以后，每次调用这个遍历器的next方法，就从函数体的头部或者上一次停下来的地方开始执行（可以理解成恢复执行），直到遇到下一个yield语句为止，并返回该yield语句的值。

定义generator函数：在function后面加`*`,如
```
function* simple(){
	yield 'first time';
	console.log('run second time');
	return 'second time';
}
```
调用
```
var f = simple();
console.log(f.next());// 输出 first time
console.log(f.next());// 输出 run second time 然后 再输出 second time

```

用[Q](https://github.com/kriskowal/q)(一个Promise库)和generator配合使用很爽的样子，见[这里](https://github.com/kriskowal/q/tree/v1/examples/async-generators)。本质上，当Promsie被resolve时，调用了generator.next,进入下一个异步

## 拓展阅读
* [A Study on Solving Callbacks with JavaScript Generators](http://jlongster.com/A-Study-on-Solving-Callbacks-with-JavaScript-Generators)
* [Replacing callbacks with ES6 Generators](http://modernweb.com/2014/02/10/replacing-callbacks-with-es6-generators/)
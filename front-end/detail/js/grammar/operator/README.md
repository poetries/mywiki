# 运算符
这里只介绍几个。更多见[这里](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators)。

* [delete](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete) 删除对象上的某个属性。如 `var obj = {a: 3}; delete obj.a;`
* [void](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void) 执行给定表达式，并返回 undefined。 很多时候用来和 undefined 做比较。在有些浏览器(一些旧的浏览器)，undefined 是可以被赋成其他值，而 void 的返回值总是 undefined。 如 `var a; void 0 === a;`
* [instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 判断某个对象是某个函数的 new 出来的。
* [typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof) 判断值的类型。下面是例子。
```
// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管NaN是"Not-A-Number"的缩写,意思是"不是一个数字"
typeof Number(1) === 'number'; // 不要这样使用!

// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof返回的肯定是一个字符串
typeof String("abc") === 'string'; // 不要这样使用!

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // 不要这样使用!

// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';

// Undefined
typeof undefined === 'undefined';
typeof blabla === 'undefined'; // 一个未定义的变量,或者一个定义了却未赋初值的变量

// Objects
typeof {a:1} === 'object';
// 使用Array.isArray或者Object.prototype.toString.call方法可以从基本的对象中区分出数组类型
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';

// 下面的容易令人迷惑，不要这样使用！
typeof new Boolean(true) === 'object';
typeof new Number(1) ==== 'object';
typeof new String("abc") === 'object';

// 函数
typeof function(){} === 'function';
typeof Math.sin === 'function';
```

## 优先级
关联性/结合性

圆括号 > 成员访问(.) > 需要技术的成员访问([]) > new(带参数列表) >  函数调用 > new (无参数列表)(从右向左)

具体见 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

## 拓展阅读
* [一道常被人轻视的前端JS面试题](http://www.cnblogs.com/xxcanghai/archive/2016/02/14/5189353.html)

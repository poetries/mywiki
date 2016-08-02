# JavaScript 数字相关的属性方法
## 类型判断
* [isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) - 是否是 [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)(Not a Number)。主要用来判断 NaN 是否是 NaN，因为 `NaN == NaN ` 是 `false`。

```
isNaN(NaN);       // true
isNaN(parseFloat('abc')); // true

isNaN(37);        // false
isNaN("37");      // false
isNaN("37.37");   // false

isNaN("");        // false: 会被转化转化成0
isNaN(" ");       // false: 会被转化转化成0

isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false

```
* [isFinite](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) - 是否是有限的数字。

```
isFinite(Infinity);  // false
isFinite(NaN);       // false
isFinite(-Infinity); // false
isFinite(2/0);       // false:2/0 的结果是 Infinity

isFinite(0);         // true
isFinite(2e64);      // true
isFinite(null);      // true
```

## 类型转化
* [parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) - 字符串转数字。

```
var number = parseFloat('4.6');
number;// 4.6
```
* [parseInt(str [,进制])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) - 字符串转整数。

```
var number = parseInt('4.6', 10);
number;// 4
```
* 数字转字符串。

```
var str = 4.5 + '';
str; // '4.5'
```

## Number 上的常用属性方法
* [Number.prototype.toFixed([精度])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) - 取几位小数。会对取的最后一位数字做四舍五入的操作。注意：返回值类型为字符串。

```
3.1415.toFixed(2);// '3.14'
3.1455.toFixed(2);// '3.15'
3.1415.toFixed();// '3'
```
* [Number.prototype.toPrecision()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision) - 返回满足精度的字符串。会对取的最后一位数字做四舍五入的操作。

```
3.1415.toPrecision(2);// '3.1'
3.1415.toPrecision(2);// '3.1415'
3.1544.toPrecision(2);// '3.2'
13.1415.toPrecision(2);// '13'
130.515.toPrecision(2);// 1.3e+2
```
* [Number.prototype.toExponential(精度)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) - 返回数字的科学计数法的字符串。

```
3.14.toExponential()// '3.14e+0'
1300000000.1415.toExponential(2)// '1.30e+9'
```
* [Number.MIN_VALUE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE) - 最小值。小于这个值的会被转换成 0。

```
Number.MIN_VALUE; // 5e-324
```
* [Number.MAX_VALUE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) - 最大值。大于这个值的会被转换成 Infinity。

```
Number.MAX_VALUE; // 1.79e+308
```


## Math 上的常用属性方法
* [Math.PI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI) - 圆周率的近似值。

```
Math.PI; // 3.141592653589793
```
* [Math.ceil(数字)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) - 如果是小数，返回比参数大最近的整数。

```
Math.ceil(4.3);// 5
Math.ceil(4.8);// 5
Math.ceil(-4.3);// -4
Math.ceil(2);// 2
```
* [Math.floor(数字)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) - 如果是小数，返回比参数小最近的整数。

```
Math.floor(3.5);// 3
Math.floor(-3.5);// -4
```
* [Math.round(数字)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) - 四舍五入。

```
Math.round(3.5);// 4
Math.round(3.4);// 3

```
* [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) - 返回 0 到 1 之间的一个随机数。包括 0，不包括1。

```
Math.random();// 可能是 0.008179764728993177
Math.random();// 可能是 0.493650607066229

```
* [Math.abs(数字)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) - 返回绝对值。

```
Math.abs(-2); // 2
Math.abs(2); // 2
Math.abs(0); // 0
```
* [Math.min(数字1[, 数字2, [, ...] ]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) - 返回一群数字中的最小值。与其相反的函数为 Math.max。

```
Math.min(0, 10, 5.4, -3.4); // -3.4
Math.min.apply(null,[0, 10, 5.4, -3.4]); // -3.4 (求数组中的最小值)
```
* Math 上还有与三级函数，指数，幂相关的函数。


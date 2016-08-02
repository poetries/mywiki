# JavaScript 数组常用方法介绍
## 修改数组

* [array.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) - 删除数组最后一位元素。
```
var arr = [1, 2, 3];
arr.pop();// 返回 3
arr;// [1,2]
```
* [array.shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) - 删除数组第一位元素。
```
var arr = [1, 2, 3];
arr.shift();// 返回 1
arr;// [2,3]
```
* [array.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - 往数组的末尾新增一个或多个元素。
```
var arr = [];
arr.push(1);// 返回数组长度 1
arr;// [1]
arr.push(2,3);
arr;// [1,2,3]
```
* [array.unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) - 往数组的开头新增一个或多个元素。
```
var arr = [1, 2, 3];
arr.unshift(0);
arr.unshift(-1, -2);
arr;// [-1, -2, 0, 1, 2]
```
* [array.reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) - 把数组元素顺序逆转。
```
var arr = [1, 2, 3];
arr.reverse();// [3, 2, 1]
arr;// [3, 2, 1]
```
* [array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) - 数组排序。
```
var arr = [1 ,-1, 2];
arr.sort();// [-1, 1, 2]
arr;// [-1, 1, 2]
arr = [{
	age: 10,
},{
	age: 1
}, {
	age: 12
}];
// 按照 age 从小到大排序
arr.sort(function(a, b){
	return a.age - b.age > 0 ? 1 : -1;
});
```
* [array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - 给数组添加或者删除元素。
```
// splice(开始下标, 删除个数，插入元素(可以多个)）
var arr = [1, 2, 3, 4];
arr.splice(1, 2);// [2,3]
arr;// [1,4]
arr = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b', 'c');// [2,3]
arr;// [1, "a", "b", "c", 4]
```

**注意：当数组执行上面的这些方法时，都会修改原数组。**

## 迭代方法
* [array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - 遍历数组。
```
['a' ,'b' ,'c'].forEach(function(each, index){
	console.log(each,index);
});
// 输出 'a' 0  'b' 1 'c' 2
```
* [array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - 从数组中找出所有符合指定条件的元素。
```
// 找出所有正数
var res = [3, 4, -1].filter(function(each){
	return each > 0;
});
res; //[3,4]
```
* [array.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) - 数组中是否每个元素都满足指定的条件。
```
// 是否都为正数
var isAllPositive = [3, 4, -1].every(function(each){
	return each > 0;
});
isAllPositive; // false;
isAllPositive = [3, 4].every(function(each){
	return each > 0;
});
isAllPositive; // true;
```
* [array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) - 数组中是否有元素满足指定的条件。
```
// 是否有正数
var isSomePositive = [3, 4, -1].some(function(each){
	return each > 0;
});
isSomePositive; // true;
isSomePositive = [-3, -4].every(function(each){
	return each > 0;
});
isSomePositive; // false;
```
* [array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - 将数组映射成另一个数组。
```
// 内容 * 2
[1, 2, 3].map(function(each){
	return each * 2;
});
// 返回 [2, 4, 6]
```
* [array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) - 将数组合成一个值。
```
// 数组内容求和。0 为初始值
[1, 2, 3].reduce(function(prev, each){
	return prev + each;
}, 0);
// 返回 6
```

当要使用迭代方法时，forEach 应该是最后被考虑的。主要原因是：forEach 与其他迭代方法比，语义性是最差的。更详细的说明见 [avoid forEach](http://aeflash.com/2014-11/avoid-foreach.html)。

** 注意 IE8 及以下版本不支持 every, some, map, reduce。如果想在 IE 8 及以下版本用这几个方法，可以用 [es5-shim](https://github.com/es-shims/es5-shim) 或 [lodash](https://lodash.com/)。**


## 其他方法
* [Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) - 是否是数组。IE9+ 支持该方法。
```
Array.isArray(3); // false
Array.isArray({}); // false
Array.isArray([]); // true
```
* [array.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) - 合并数组或合并数组的值。
```
[1,2,3].concat(4,5); // 输出 [1, 2, 3, 4, 5]
```
* [array.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - 合并数组所有元素拼接成字符串。
```
[1,2,3].join(); // 输出 '1,2,3'
[1,2,3].join('@'); // 输出 '1@2@3'
```
* [array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) - 选择数组中的一部分元素。
```
// slice(开始下标, 结束下标（可选，默认为数组长度）)
['a', 'b', 'c', 'd'].slice(1);// ["b", "c", "d"]
['a', 'b', 'c', 'd'].slice(1, 2);// ["b"]
['a', 'b', 'c', 'd'].slice(1, 3);// ["b", "c"]
```
* [array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) - 查找数组中指定元素的下标。
```
['a', 'b', 'c', 'd'].indexOf('c'); // 2
['a', 'b', 'c', 'd'].indexOf('g'); // -1
```
* [array.lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) - 查找数组中指定元素的下标。查找方向为从后往前。
```
['c', 'd', 'c'].lastIndexOf('c'); // 2
['a', 'b', 'c', 'd'].lastIndexOf('g'); // -1
```

## 参考
* [D3.js 的数组 Wiki](https://github.com/mbostock/d3/wiki/%E6%95%B0%E7%BB%84)
* [avoid forEach](http://aeflash.com/2014-11/avoid-foreach.html)

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
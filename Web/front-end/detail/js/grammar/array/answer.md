JavaScript 数组练习题见[这里](practice.md)。

** 题 1：查找数组对象中 age 大于 18 对象 **
```
function filterAdult (arr) {
	var res = [];
	if(Array.isArray(arr)){
		if(arr.filter){// 如果浏览器支持filter
			res = arr.filter(function (each) {
				return each.age > 18;
			})
		} else {
			arr.forEach(function  (each) {
				if(each.age > 18){
					res.push(each);
				}
			});
		}
	}
	return res;
}
```

***

** 题 2：判断数组中是否所有的数字都大于 0 **
```
function isAllNumPosive (arr) {
	var res = true;
	if(Array.isArray(arr)){
		if(arr.every){
			res = arr.every(function (each) {
				var isPosive = true;
				if(typeof each === 'number' && each < 0){
					isPosive = false;
				}
				return isPosive;
			});
		} else {
			arr.forEach(function  (each) {
				if(typeof each === 'number' && each < 0){
					res = false;
				}
			});
		}
	} else {
		throw new TypeError('param is not Array');
	}
	return res;

}
```

***

** 题 3：改变传入的数组，将数组中第 n(从 0 开始算 ) 个元素放到数组的开头 **
```
function putFirst (arr, n) {
	if(Array.isArray(arr)){
		var item = arr.splice(n, 1)[0];
		arr.unshift(item);
	}
}
```

***

** 题 4: 将 arguments 对象转换成数组 **
```
function toArray (arrLikeObj) {
	return [].slice.call(arrLikeObj);
}
```
***

** 题 5：将数组中数字内容求和  **
```
function sum (arr) {
	var res = 0;
	if(Array.isArray(arr)){
		if(arr.reduce){
			res = arr.reduce(function (prev, curr) {
				if(typeof curr === 'number'){
					return prev + curr;
				}
				return prev;
			}, 0)
		} else {
			arr.forEach(function  (each) {
				if(typeof each === 'number'){
					res = res + each;
				}
			});
		}
	}
	return res;
}
```

***

** 题 6: 将数组元素按 age 字段的值，从小到大排序 **
```
function sortAge (arr) {
	var res = false;
	if(Array.isArray(arr)){
		res = arr.sort(function (a, b) {
			return a.age < b.age ? -1: 1;
		});
	} else {
		throw new TypeError('param is not Array');
	}
	return res;
}
```

***

** 题 7: 将数组元素去重,其中数组元素均为基本类性 **
```
function uniq (arr) {
	var res = [];
	if(Array.isArray(arr) ){
		arr.forEach(function  (each) {
			if(res.indexOf(each) === -1){
				res.push(each);
			}
		})
	} else {
		throw new TypeError('param is not Array');
	}
	return res;
}
// 或
function uniq (arr) {
	var res = [];
	var cache = {};
	if(Array.isArray(arr) ){
		arr.forEach(function  (each) {
			if(cache[each] === undefined){
				res.push(each);
				cache[each] = true;
			}
		})
	} else {
		throw new TypeError('param is not Array');
	}
	return res;
}
```
***

** 题 8: 将数组内容乱序 **
```
function random(arr) {
    var res;
    if (Array.isArray(arr)) {
        res = arr.sort(function() {
            return Math.random() > 0.5 ? 1 : -1;
        })
    } else {
        throw new TypeError('param is not Array');
    }
    return res;
}
```

***

** 题 9: 复制数组 **
```
function cloneArray(arr){
  return arr.map(function(item){
    return item;
  });
}
```

***

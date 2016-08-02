# JavaScript 字符串练习题之实现
JavaScript 字符串练习题见[这里](http://www.jianshu.com/p/7d2dabf89409)。

** 题 1：首字母改大写 **

```
function firstLetterToUpperCase(str) {
    var res;
    if (typeof str === 'string') {
        res = str.charAt(0).toUpperCase() + str.substr(1);
    } else {
        res = str;
    }
    return res;
}
```
***


** 题 2：去字符串头尾空格 **
```
function trim(str) {
    var res;
    if (typeof str === 'string') {
        res = str.replace(/^\s+/g, '')
            .replace(/\s+$/g, '');
    } else {
        res = str;
    }
    return res;
}
```

***

** 题 3：将字符串中 `_` 后面的小写字母变大写，并且删除 `_`  **
```
function toCamelStyle(str) {
    var res;
    if (typeof str === 'string') {
    	var isFisrstLetterUnderscore = str.charAt(0) === '_';
    	var wordArr;
    	if(isFisrstLetterUnderscore){
    		str = str.substr(1);
    	}
    	wordArr = str.split('_');
    	wordArr = wordArr.map(function (word, index) {
    		// firstLetterToUpperCase 在题目 1 中实现
    		return index === 0 ? word : firstLetterToUpperCase(word);
    	});
    	res = wordArr.join('');
    	if(isFisrstLetterUnderscore){
    		res = '_' + res;
    	}
    } else {
        res = str;
    }
    return res;
}
```

***

** 题 4：删除字符串中所有的数字 **
```
function removeNum(str) {
    var res;
    if (typeof str === 'string') {
    	res = str.replace(/\d/g, '');
    } else {
        res = str;
    }
    return res;
}
```

***

** 题 5: 反转字符串 **
```
function reverse(str) {
    var res;
    if (typeof str === 'string') {
    	res = [];
    	var charArr = str.split('');
    	var currIndex = charArr.length - 1;
    	for(; currIndex >= 0; currIndex--){
    		res.push(charArr[currIndex]);
    	}
    	res = res.join('');
    } else {
        res = str;
    }
    return res;
}
```

***

** 题 6: 统计字符串中各字符在字符串中出现的数量 **
```
function caculateExistNum(str) {
    var res = false;
    if (typeof str === 'string') {
    	res = {};
    	var charArr = str.split('');
    	charArr.forEach(function (eachChar) {
    		res[eachChar] = res[eachChar] ? res[eachChar] + 1 : 1;
    	});
    }
    return res;
}
```
***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
# JavaScript 字符串练习题
真正的掌握知识需要不断的练习。下面列了些练习题。希望对大家有所帮助。

如果对字符串的 API 不是很熟悉，可查阅 [W3School JavaScript String  API](http://www.w3school.com.cn/jsref/jsref_obj_string.asp)。

** 题 1：首字母改大写 **
编写函数 `firstLetterToUpperCase`,满足
```
firstLetterToUpperCase('hello'); // 输出 'Hello'
firstLetterToUpperCase('World'); // 输出 'World'
firstLetterToUpperCase(345); // 输出 345
```

***

** 题 2：去字符串头尾空格 **
编写函数  `trim`,满足
```
trim(' abc   ');  // 输出 'abc'
trim(' a bc   ');  // 输出 'a bc'
```

***

** 题 3：将字符串中 `_` 后面的小写字母变大写，并且删除 `_`  **
编写函数 `toCamelStyle`,满足
```
toCamelStyle('abc_bcd');  // 输出 'abcBcd'
toCamelStyle('a_3_c_d_ef');  // 输出 'a3CDEf'
toCamelStyle('_a_b_c_d_ef');  // 输出 '_aBCDEf'
```

***

** 题 4：删除字符串中所有的数字 **
编写函数 `removeNum`,满足
```
removeNum('a23b434c45');  // 输出 'abc'
removeNum('343abd8c');  // 输出 'abdc'
```

***

** 题 5: 反转字符串 **
编写函数 `reverse`,满足
```
reverse('abcd'); // 输出 'dbca'
reverse('a'); // 输出 'a'
```

***

** 题 6: 统计字符串中各字符在字符串中出现的数量 **
编写函数 `caculateExistNum`,满足
```
caculateExistNum('abcd'); // 输出 {a:1,b:1,c:1,d:1}
caculateExistNum('aaabbc00'); // 输出 {a:3,b:2,c:1,o:1}
caculateExistNum(''); // 输出 {}
```

***

如果想获得更多练习，[CodeWars](http://www.codewars.com/kata/latest/my-languages?tags=Strings) 上有更多有意思的题。

没有思路?可以参考下[我的解答](http://www.jianshu.com/p/07e31a86fabe)。


***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
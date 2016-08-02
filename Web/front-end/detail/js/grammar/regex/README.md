# 正则表达式
> 一个正则表达式就是一个用来描述字符模式的对象。它被用来在文本中执行模式匹配(pattern-matching)以及”查找-替换”(search-and-replace)的任务。javascript中正则的风格类似Perl中正则的风格。

## 创建正则表达式
```
// 方法1
var reg = new RegExp(pattern,modifiers);
// 方法2
var reg = /pattern/modifiers;
```

modifiers 包括

* g : 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）
* i : 执行对大小写不敏感的匹配
* m : 执行多行匹配，具体见[这里](http://javascript.info/tutorial/ahchors-and-multiline-mode)

注：一正则时可多个模式，如 `/hEllO/ig`


## JavaScript正则表达式对象的常用方法
### .test()。该方法对一个字符串进行匹配。并根据匹配结果返回true或false。例如
```
/e/.test('The best things in life are free'); //true
```

### .exec()。该方法将对一个字符串进行匹配。并返回第一个匹配项目。例如：
```
/e/.exec('The best things in life are free'); // ["e"]
```

在字符串方法中，有`match`,与`exec`类似。如
```
'The best things in life are free'.match(/e/); //["e"]
```

下面来看个神秘的问题：
```
var regexAbc = /a(b)c/gi
console.log(regexAbc.exec("abc")) // ["abc", "b"]
console.log(regexAbc.exec("abc")) // null
console.log(regexAbc.exec("abc")) // ["abc", "b"]
console.log(regexAbc.exec("abc")) // null
```


产生上面奇怪现象的原因是：Javascript 的正则表达式是有状态的。 exec 方法，是有副作用的。当其匹配成功的时候 reg.lastIndex 会被改变。因此导致了间隔的返回 null 的情况。

因此，正确的写法是:
```
var regexAbc = /a(b)c/gi
console.log(regexAbc.exec("abc")) // ["abc", "b"]
regexAbc.lastIndex = 0;
console.log(regexAbc.exec("abc")) // ["abc", "b"]
```

参考[正则表达式exec一个神秘的小问题](https://segmentfault.com/q/1010000004388956)。

## 正则表达式中的元字符
正则表达式中的元字符是用来替代一类具有相同属性的字符的特殊字符，它也可以被称为字符类(character class)。

* .   查找单个字符，除了换行和行结束符。
* \w  查找单词字符（字母、数字以及下划线”_”）。
* \W  查找非单词字符。
* \d  查找数字。
* \D  查找非数字字符。
* \s  查找空白字符。
* \S  查找非空白字符。
* \b  匹配单词边界。
* \B  匹配非单词边界。
* \0  查找 NUL 字符。
* \n  查找换行符。
* \f  查找换页符。
* \r  查找回车符。
* \t  查找制表符。
* \v  查找垂直制表符。
* \xxx    查找以八进制数 xxx 规定的字符。
* \xdd    查找以十六进制数 dd 规定的字符。
* \uxxxx  查找以十六进制数 xxxx 规定的 Unicode 字符。

## 正则表达式中的括号
### 大括号 ()
进行分组。好比email地址，我们就可以将它分为

1. @前面的部分；
2. @后面’.’之前的部分；
3. ’.’之后的部分；

如果要匹配所有gamil邮箱中`@`前的用户名中带有`jack`的替换为`joel`
```
'iamjack007@gmail.com'.replace(/^(\w*)(jack)(\w*)@gmail\.com$/, '$1joel$3@gmail.com');  //"iamjoel007@gmail.com"
```

这种类似于模块化的思想，不仅使我们一次可以专注于查找其中的一个小部分，也可以让我们在后面可以轻松的替换其中的某个部分，而不需要纠结于“牵一发而动全身”的痛苦。

### 方括号 []
用于查找某个范围内的字符

* [abc]   查找方括号之间的任何字符。
* [^abc]  查找任何不在方括号之间的字符。
* [0-9]   查找任何从 0 至 9 的数字。
* [a-z]   查找任何从小写 a 到小写 z 的字符。
* [A-Z]   查找任何从大写 A 到大写 Z 的字符。
* [A-z]   查找任何从大写 A 到小写 z 的字符。
* [adgk]  查找方括号内的任何字符。
* [^adgk] 查找不在方括号内的任何字符。

## 量词
匹配多个。如匹配3个数字可用正则`/\d{3}/`。

* n+  匹配任何包含至少一个 n 的字符串。
* n*  匹配任何包含零个或多个 n 的字符串。
* n?  匹配任何包含零个或一个 n 的字符串。
* n{X}    匹配包含 X 个 n 的序列的字符串。
* n{X,Y}  匹配包含 X 或 Y 个 n 的序列的字符串。
* n{X,}   匹配包含至少 X 个 n 的序列的字符串。
* n$  匹配任何结尾为 n 的字符串。
* ^n  匹配任何开头为 n 的字符串。
* ?=n     匹配任何其后紧接指定字符串 n 的字符串。
* ?!n     匹配任何其后没有紧接指定字符串 n 的字符串。

## 习题
1. 在字符串”1.5 0 123 -7 -0.4”里面匹配带小数点的数，无论是正的还是负的。
1. 在字符串”1.5 0 123”中匹配数字([1.5,0,123])，无论是整数还是小数。
1. [更多习题](http://javascript.info/tutorial/practice)

[交互学习教程](http://regexone.com/lesson/introduction_abcs)

------------
## 进阶
## 贪婪和非贪婪模式
默认正则匹配是贪婪模式的，即前面的正则匹配尽可能多的。如
```
/(\d+)(\d+)/.exec('12345');//结果["12345", "1234", "5"]
```

开启非贪婪模式,量词后面加`?`
如
```
/(\d+?)(\d+)/.exec('12345');//结果["12345", "1", "2345"]
```

更详细的的解释，点[这里](http://javascript.info/tutorial/greedy-and-lazy)

## 非捕获性分组 
在括号内容以`?:`开头。如：
```
/(?:\d+)\d+/.exec('123');// 结果 ["123"]
```

## 匹配
Lookaround 是 向前匹配(Lookahead) 和 向后匹配(Lookbehind) 的统称。
向前匹配
> 包括向前正向匹配（Positive Lookahead）和向前负向匹配（Negative Lookahead），语法是 `?=` 和 `?!`。    
前正向匹配：匹配任何其后紧接指定字符串 n 的字符串。    
向前负向匹配：匹配任何其后没有紧接指定字符串 n 的字符串。

类似的还有向后匹配。     
在javascript目前只能使用 Lookahead，还无法使用 Lookbehind。

Lookaround 参考教程：http://www.regular-expressions.info/lookaround.html

## [正则拓展库](http://xregexp.com/)
[xregexp](http://xregexp.com/)特性

1. 支持所有的ES5的正则的语法。
1. 兼容 Explorer 5.5+, Firefox 1.5+, Chrome, Safari 3+, and Opera 11+。在nodejs上也可以使用。
1. 比原生正则可读性高。
1. 比原生正则易用。

## 常用正则
* 匹配中文字符的正则表达式： [\u4e00-\u9fa5]
* 匹配双字节字符(包括汉字在内)：[^\x00-\xff]



## 更多资源reg
* [正则在线工具](http://regexr.com/)
* [正则简明参考](http://javascript.info/tutorial/regular-expressions-javascript)
* 死磕JavaScript正则表达式系列 [1](http://www.html-js.com/article/1723) [2](http://www.html-js.com/article/1726) [3](http://www.html-js.com/article/1730) [4](http://www.html-js.com/article/1948)


## 参考
* http://www.w3school.com.cn/js/jsref_obj_regexp.asp
* http://www.html-js.com/article/A-day-to-learn-JavaScript-JavaScript-regular-expressions-a
* http://javascript.info/tutorial/regular-expressions-javascript
* https://github.com/lifesinger/lifesinger.github.com/issues/162#wechat_redirect

## 习题答案
1. '1.5 0 123 -7 -0.4'.match(/(-?\d+\.\d+)/g)
2. '1.5 0 123'.match(/(\d+\.?\d+)|0/g)

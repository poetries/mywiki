# 使用 CSS 伪元素需要注意的
## 伪元素 ::before，::after
### 1. 空元素(不能包含内容的元素)不支持 ::before，::after
* IE 不支持的元素有：img，input，select，textarea。
* FireFox 不支持的元素有：input，select，textarea。
* Chrome 不支持的元素有：input[type=text]，textarea。

### 2. 必须设置 content 属性
若不设置，则伪元素不会显示。如果不想设置 content 的内容，可以将内容设置为空。如：
```
.a:before {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    background-color: red;
}
```

###  3. content 的属性值要遵循一些规则
要遵循如下规则：
* 如果 content 的值是常量，必须用单引号或双引号括起来。如：`content:'abc';`  , `content:"abc";`。
* 如果 content 的值是该元素的某个属性于常量组合而成的，常量仍然要用单引号或双引号括起来,之间不需要加号。如：`content: '('attr(title)')';`。感觉这种写法好违法直觉。

若 content 的属性值不遵循如上要求，则伪元素不会显示。

### 4. content 的属性值中如何设置特殊字符？
如下表所示：

| 特殊字符        |  content 中这么写 |
| :-----------|:-------------    |
|  空格      |content:"\00a0";   |
|  <       	 |content:"\003c";   |
|  >       	 |content:"\003e";   |
|  &       	 |content:"\0026";   |
|  "       	 |content:"\0022";   |
|  ©       	 |content:"\00a9";   |
|  ®       	 |content:"\00ae";   |
|  ×       	 |content:"\00d7";   |

更多见 [这里](https://css-tricks.com/snippets/html/glyphs/)。

## 伪元素 ::first-letter，::first-line
1.  只对 `display` 为 `block` 和 `inline-block` 之类的块级元素有效。
1. 对内容的开头是符号，或者第一个是英文字母或数字，第二个是符号的，使用  ::first-letter 来设置样式时，会对第一个字母和符号都生效。好违反直觉。

## 相关文章
* [CSS伪元素介绍](http://www.jianshu.com/p/a52ed387e540)

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
# HTML介绍
## 目录
* [HTML是神马](#what)
* [基本结构](#struct)
* [标签(也叫元素)](#tag)
* [块级元素和行内元素](#block-and-inline)
* [替换元素和非替换元素](#replaced-elements-and-not)
* [拓展阅读](#reading)

## <a name="what">HTML是神马</a>
* HTML是用来描述网页的一种语言
* HTML是超文本标记语言（HyperText Markup Language）
* 不是一种编程语言，是一种标记语言

HTML文件的拓展名为`html`。

## <a name="struct">基本结构</a>
网页是的一系列的标签组成的。    
例如
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>标题</title>
</head>
<body>
	<h1>My First Heading</h1>
	<p>My first paragraph.</p>
</body>
</html>
```
其中
* DOCTYPE定义了文档类型。`<!DOCTYPE html>`表明这是一个HTML5文档
* `<html>`和`</html>`之间的内容描述了网页
* `<head>`和`</head>`之间的内容描述了网页的一些额外信息。不会被显示
* `<title>`之间的内容描述了网页的标题。会在网页标签上显示
* `<meta charset="utf-8">`让浏览器用utf-8的编码格式来对文档内容进行编码
* `<body>`和`</body>`之间的内容描述网页的可见部分
* `<h1>`和`</h1>`之间的内容描述标题
* `<p>`和`</p>`之间的内容描述了段落

## <a name="what">标签(也叫元素)</a>
标签分为能包含标签内容和不能包含标签内容这两类。    

**能包含内容的标签**由开始标签，结束标签，标签属性，标签的内容组成的。例如：
```
<a href="http:www.baidu.com" title="Baidu一下">百度</a>
```
其中:    
* `<a href="http:www.baidu.com" title="Baidu一下">`为起始标签
* `</a>`为结束标签
* `href`和`title`为标签属性，`http:www.baidu.com`和`Baidu一下`为属性对应的值。属性的值要由英文的双引号包起来。
* `百度`为标签的内容。

**不能包含内容的标签**被称为空元素。空元素是在开始标签中关闭的。    
如 `<br/>`, `<input type="text" />`

## <a name="block-and-inline">块级元素和行内元素</a>
块级元素会始终占居一行，而行内元素并不会。    
常见的块级元素有 `div, form, table, header, aside, section, article, figure, figcaption, h1~h6, nav, p, pre, blockqoute, canvas, ol, ul, dl`    
常见的行内元素有 `span, a, img, label, input, select, textarea, br, i, em, strong, small, button, sub, sup, code`

## <a name="replaced-elements-and-not">替换元素和非替换元素</a>
替换元素就是指浏览器是根据元素的属性来判断具体要显示的内容的元素，比如 img 标签，浏览器是根据其 src 的属性值来读取这个元素所包含的内容的，常见的替换元素还有 input 、textarea、 select、 object、 iframe 和 video 等等，这些元素都有一个共同的特点，就是浏览器并不直接显示其内容，而是通过其某个属性的值来显示具体的内容，比如浏览器会根据 input 中的 type 的属性值来判断到底应该显示单选按钮还是多选按钮亦或是文本输入框。而对于非替换元素，比如 p、label 元素等等，浏览器这是直接显示元素所包含的内容。

## <a name="reading">拓展阅读</a>
* [什么是超文本？](http://w3school.com.cn/tags/tag_term_hypertext.asp)
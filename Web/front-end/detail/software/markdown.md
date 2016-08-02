# Markdown使用参考

## 目录
* [Markdown概述](#summary)
* 语法
  * [标题](#headers)
  * [换行](#break-line)
  * [链接](#anchor)
  * [图片](#pic)
  * [列表](#list)
  * [强调](#strong)
  * [斜体](#italic)
  * [删除线](#del-line)
  * [分割线](#split-line)
  * [行内代码](#inline-code)
  * [块级代码](#block-code)
  * [表格](#table)
  * [引用](#blockquote)
  * [块级元素](#block)
  * [复选框](#checkbox)
  * [转意](#backslash-escapes)
* [参考](#reference)
* [拓展阅读](#reading)

## <a name="summary">Markdown概述</a>
Markdown是一种易读易写的标记语言。它能被生成HTML。Markdown的目标是：成为一种适用于网络的书写语言。  
Markdown 与 Office Word 相比，其控制文本的格式更容易；与 HTML 相比，其写法上更简洁和简单。虽然 Markdown 在功能上没有 Office Word 和 HTML 强大，但如果只是用 Markdown 来写写文章和文档，也够用了~  

Github，Stackoverflow等网站都支持Markdown。

## <a name="headers">标题</a>
```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```
转化成HTML的效果如下  
# h1
## h2
### h3
#### h4
##### h5
###### h6

## <a name="break-line">换行</a>
两个及以上空格加回车。

## <a name="anchor">链接</a>
```
跳至[落网](http://www.luoo.net/)  
新窗口跳至<a href="http://www.luoo.net/" target="_blank">落网</a>  
带title的链接 [落网](http://www.luoo.net/ '落网')  
地址与文字一样的链接的简写 <http://www.baidu.com>

```

转化成HTML的效果如下  

跳至[落网](http://www.luoo.net/)  
新窗口跳至<a href="http://www.luoo.net/" target="_blank">落网</a>  
带title的链接 [落网](http://www.luoo.net/ '落网')  
地址与文字一样的链接的简写 <http://www.baidu.com>

## <a name="pic">图片</a>
```
![头像](https://avatars0.githubusercontent.com/u/2120155?v=3&s=40)

```

转化成HTML的效果如下  
![头像](https://avatars0.githubusercontent.com/u/2120155?v=3&s=40)

## <a name="list">列表</a>
有序列表  
```
1. 第一个
  1. 第1.1个
1. 第二个
1. 第三个
```

转化成HTML的效果如下  

1. 第一个
	1. 第1.1个
1. 第二个
1. 第三个

无序列表  
```
* 葡萄
  * 夏黑
  * 巨峰
* 荔枝
* 梨
```

转化成HTML的效果如下  

* 葡萄
	* 夏黑
	* 巨峰
* 荔枝
* 梨


## <a name="strong">强调</a>
```
**强调内容**
```
转化成HTML的效果如下  
**强调内容**

## <a name="italic">斜体</a>
```
*斜体内容*
```

转化成HTML的效果如下  
*斜体内容*

## <a name="del-line">删除线</a>
```
~~这种理解是有问题的~~
```

转化成HTML的效果如下  
~~这种理解是有问题的~~

## <a name="split-line">分割线</a>
```
****
```

转化成HTML的效果如下  
****

## <a name="inline-code">行内代码</a>
```
`npm i`
```

转化成HTML的效果如下  
`npm i`

## <a name="block-code">块级代码</a>
```
3个`js
function say(str){
  console.log(str);
}
3个`

3个`css
#main{
  width: 80%;
  margin: 20px auto;
}
3个`
```
转化成HTML的效果如下  
```js
function say(str){
	console.log(str);
}
```

```css
#main{
	width: 80%;
	margin: 20px auto;
}
```

## <a name="table">表格</a>
```
| Tables        | Are           | Cool  |
| :------------ |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

转化成HTML的效果如下    

| Tables        | Are           | Cool  |
| :------------ |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## <a name="blockquote">引用</a>
```
> 天才就是99%的努力加上1%的灵感。-爱迪生
```

转化成HTML的效果如下    
> 天才就是99%的努力加上1%的灵感。-爱迪生

## <a name="block">块状元素</a>
```
∙∙∙∙天才就是99%的努力加上1%的灵感。
∙∙∙∙1%的灵感是很重要的。
∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙-爱迪生
```
其中`∙`代表空格。

转化成HTML的效果如下    

    天才就是99%的努力加上1%的灵感。
    1%的灵感是很重要的。
                            -爱迪生

## <a name="checkbox">复选框</a>
```
- [x] Be awesome
- [ ] Prepare dinner
  - [x] Research recipe
  - [ ] Buy ingredients
  - [ ] Cook recipe
- [ ] Sleep
```

转化成HTML的效果如下    
- [x] Be awesome
- [ ] Prepare dinner
  - [x] Research recipe
  - [ ] Buy ingredients
  - [ ] Cook recipe
- [ ] Sleep

## <a name="backslash-escapes">转义</a>
Markdown 可以利用反斜杠来插入一些在语法中有其它意义的符号，例如：如果你想要用星号加在文字旁边的方式来做出强调效果（但不用`<em>`标签），你可以在星号的前面加上反斜杠：
```
\*sth\*
```
转化成HTML的效果如下    
\*sth\*

## <a name="reference">参考</a>
* [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* <http://www.markdown.cn/>

## <a name="reading">拓展阅读</a>
* http://www.markdown.cn/
* [Markdown 语法说明 (简体中文版)](http://wowubuntu.com/markdown/)


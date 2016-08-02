## HTML的标签及属性
## 目录
* [链接](#html_links)
* [标题](#header)
* [段落](#p)
* [图片](#img)
* [列表](#list)
* [标签](#label)
* [表格](#table)
* [表单](#form)
* [div](#div)
* [span](#span)
* [注释](#comment)
* [更多标签](#more)
* [标签的嵌套规则](#tag-nesting)
* [拓展阅读](#reading)
* [作业](#homework)

## <a name="html_links">链接</a>
链接由 `<a>`定义。    
常用属性
* `href` 链接地址，常见的链接地址有如下几种
	* `https://gusouk.com/`
	* `/a.html`
	* `#aaa` 页面滚动至name或id为`aaa`的地方
	* `javascript:void(0);`
* `title` 提示内容
* `target` 链接的文档在何处显示
	* 默认在当前页显示
	* `_blank` 在新窗口显示
	* 值若为iframe的name值一致，则在iframe中打开

前端在做页面写链接地址时，若不知道地址，可将href设置成`###`。若点击a不跳转页面，而是绑定点击事件,则href设置为`javascript:void(0);`。

更详细的介绍点[这里](http://w3school.com.cn/html/html_links.asp)


## <a name="header">标题</a>
1号到6号标题分别由 `<h1>`到`<h6>`定义。    

## <a name="p">段落</a>
段落是由 `<p>` 标签定义。

## <a name="img">图片</a>
图像由 `<img>` 标签定义。常用属性
* `src` 图片地址
* `alt` 加载图片失败时，显示的文字

## <a name="list">列表</a>
有序列表由`<ol>`定义，列表的条目由`<li>`定义。如
```
<h3>最热单曲</h3>
<ol>
	<li>时间都去哪儿了</li>
	<li>泡沫</li>
	<li>卷珠帘</li>
</ol>
```

无序列表由`<ul>`定义，列表的条目由`<li>`定义。如
```
<h3>a的常见属性包括</h3>
<ul>
	<li>href</li>
	<li>title</li>
	<li>name</li>
	<li>target</li>
</ul>
```

## <a name="label">标签</a>
标签由`<label>`定义。常见属性
* `for`

## <a name="list">表格</a>
表格由`<table>`元素定义。一个普通的表格，如下：
```
<table>
	<thead>
		<tr>
			<th>姓名</th>
			<th>性别</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>路飞</td>
			<td>男</td>
		</tr>
		<tr>
			<td>索隆</td>
			<td>男</td>
		</tr>
		<tr>
			<td>香吉士</td>
			<td>男</td>
		</tr>
	</tbody>
</table>
```

## <a name="form">表单</a>
表单由`<form>`来定义。它用于把用户输入的数据提交到后台。常见属性    
* `action` 提交地址。
* `method` 提交方式。默认为GET

点击提交按钮时，表单进行提交。    
提交的内容为表单元素的name属性的值与用户输入的对应元素的值。    

一个普通的表单
```
<form action="" method="POST">
	<div>
		<label for="">名称</label>
		<input name="name" type="text" placeholder="请输入名称">
	</div>
	<div>
		<label for="">介绍</label>
		<textarea name="des"></textarea>
	</div>
	<button type="reset">重置</button>
	<button type="submit">提交</button>
</form>
```

常见的表单输入元素有：    
* 文本框 `<input type="text">` 常见属性
	* `placeholder`
	* `value`
	* `maxlength` 最大长度
* 文本域 `<textarea></textarea>` 和文本框相比，可输入更多文字。常见属性
	* `placeholder`
	* `value`
	* `maxlength` 最大长度IE9(不包括)以下不支持
* 单选框 `<input type="radio" name="gendar">` 。其中`name`的值一样的单选框只有一个能被选中
* 复选框 `<input type="checkbox" name="gendar">`
* 下拉选择框 `<select><option value="1">苹果</option><option value="2">橘子</option></select>`
* 数字框 `<input type="number">` 。注意，其不支持`maxlength`属性
	* `min` 最小值
	* `max` 最大值
* 提交按钮 `<button type="submit">提交</button>` 点击
* 重置按钮 `<button type="reset">重置</button>`

注意：为了能让后台辨别不同的表单元素，表单元素输入必须加`name`属性。

## <a name="div">div</a>
`<div>`组合文档中的块级元素

## <a name="span">span</a>
`<span>`组合文档中的行内元素

## <a name="comment">注释</a>
注释由`<!-- 注释内容 -->`来定义

## <a name="more">更多标签</a>
* `strong` 强调
* `pre` 预定义
* `code` 代码
* `blockquote` 引用
* `small` 补充说明
* `i` 图标或改变的语义
* `dl`
	* `dt`
	* `dd`

## <a name="tag-nesting">标签的嵌套规则</a>
虽然浏览器有容错机制，但元素的随意的嵌套可能会出现问题。

### HTML4/XHTML的嵌套规则
* 内联元素不能嵌套块元素
* `<p>`元素和`<h1~6>`元素不能嵌套块元素。

### 嵌套错误可能引起的问题
* 元素开始与结束标签嵌套错误，页面可以在大部分浏览器被正常解析，IE9会出现解析错误
* 在`<p>`元素内嵌入`<div>`等元素造成所有浏览器的解析错误
* 在`<h1>~<h6>`元素内嵌入`<div>`等元素所有浏览器可以解析正常
* 在`<a>`元素内嵌入`<a>`元素会导致所有浏览器的解析错误
* 在列表元素`<li><dt><dd>`等插入非列表兄弟元素会导致IE6\IE7的解析错误

了解更多，见[这里](http://www.smallni.com/element-nesting/)

## <a name="reading">拓展阅读</a>
* [HTML 参考手册](http://www.w3school.com.cn/tags/index.asp)
* [whatwg 维护的 HTML 语义](https://html.spec.whatwg.org/multipage/semantics.html)。[元素使用概要](https://html.spec.whatwg.org/multipage/semantics.html#usage-summary)

## <a name="homework">作业</a>
* 学习页面 http://kejian.jirengu.com/fe1/?c=%E8%AF%BE%E4%BB%B6/04-HTML%E5%9F%BA%E7%A1%801 的HTML标签使用
* 用户调查的页面的HTML。调查的内容包括：
	* 姓名
	* 性别 (单选按钮)
	* 所在国家 (下拉框)
	* 年龄　
	* 爱好 可多选 (复选框)
	* 自我介绍
* 写一下 http://www.jianshu.com/p/f543de9e9a65 页面的HTML。
* 用table元素做一个课程表

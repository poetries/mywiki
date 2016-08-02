# HTML代码片段
## IE条件注释
```
<!--[ifIE6]>
IE6版本有效
<![endif]-->
<!--[if gt IE6]>
IE6以上版本有效
<![endif]-->
<!--[if gte IE6]>
IE6（包含）及以上版本有效
<![endif]-->
<!--[if lt IE8]>
IE8以下版本有效
<![endif]-->
<!--[if lte IE8]>
IE8（包含）及以下版本有效
<![endif]-->
<!--[if !IE]>-->
除了IE
<![endif]-->
```

## 用Chrome或最新浏览器内核渲染页面
```
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit"><!-- 此标签只有360浏览器支持 -->
```

## mobile 的页面防止缩放的 Meta
```
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport">
```

## HTML特殊符号（也有的叫字符实体）
* `空格`  `&nbsp;`
* `<` `&lt;`
* `>` `&gt;`
* `&` `&amp;`
* `"` `&quot;`
* `©` `&copy;` 版权
* `®` `&reg;` 注册商标
* `×` `&times;`

## HTML5页面最简结构
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
```
如果使用[Emmet](https://sublime.wbond.net/packages/Emmet)插件，只需输入`html:5＋Tab键`即可生成上面的结构。

## 占位标签模版
段落
```
<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
```

导航
```
<nav>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Clients</a></li>
		<li><a href="#">Contact Us</a></li>
	</ul>
</nav>
```

表格
```
<table>
	<thead>
		<tr>
			<th></th>
			<th></th>
			<th></th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</tbody>
</table>
```
更多见[这里](http://html-ipsum.com/)
Sublime有生成这些占位标签的插件:[Placeholders](https://github.com/mrmartineau/Placeholders)

## 响应式Meta
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```
## 邮件链接
普通的
```
<a href="mailto:someone@yoursite.com">Email Us</a>
```

带主题的
```
<a href="mailto:someone@yoursite.com?subject=Mail from Our Site">Email Us</a>
```

## 防止搜索引擎爬取页面
防止所有搜索引擎（有操守的搜索引擎，呵呵）
```
<meta name="robots" content="noindex">
```

只防Google
```
<meta name="googlebot" content="noindex">
```

防止爬取链接指向的页面
```
<a href="privatepage.html" rel="nofollow">Link to private page</a>
```

## 关闭输入框自动补全
```
<input name="q" type="text" autocomplete="off"/>
```


## 参考
* https://css-tricks.com/snippets/html/

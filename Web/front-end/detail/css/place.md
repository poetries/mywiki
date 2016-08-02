# 样式写在哪
## 写在一个文件里
写在一个文件里的样式叫做外部样式表。    
这样的文件的后缀名为`css`。    
例如,`mystle.css`文件中的内容
```css
hr {color: sienna;}
p {margin-left: 20px;}
body {background-image: url("images/back40.gif");}
```

页面中用外部样式表要用`link`标签，例如
```
<link rel="stylesheet" type="text/css" href="path/to/mystyle.css" />
```
`link`标签要放在`head`标签中。否则页面可能会闪烁。

## 写在`style`标签内
写在`style`标签内的样式称为内部样式表。例如
```
<style type="text/css">
  hr {color: sienna;}
  p {margin-left: 20px;}
  body {background-image: url("images/back40.gif");}
</style>
```

## 写在标签的`style`属性里
写在标签的`style`属性里的样式称为，称为内联样式。例如
```
<p style="color: sienna; margin-left: 20px">
This is a paragraph
</p>
```

## 外部样式表，内部样式表，内联样式 哪种方式好
推荐使用外部样式表。不建议使用内部样式表和内联样式。

原因：
外部样式表    
* 能被复用
* 能被缓存

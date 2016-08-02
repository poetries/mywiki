# 常见浏览器bug及处理
## 目录
* [双边距](#double-margin)
* [`overflow:hidden`失效](#double-margin)
* [滚动条bug](#double-margin)
* [浏览器未重绘导致的问题](#repaint)
* [li底部3px的Bug](#float-li-3px)
* [IE6注释bug](#repeat-text)
* [body上设置overflow-y:hidden的问题](#over-flow-y)
* [Firefox下input button内文字不垂直居中](#text-v-center)
* [IE6 bug系列](http://www.css88.com/archives/tag/ie6-bug)
* [用 -webkit-mask-image 解决 border-radius 元素对应用了 transform 的子元素 overflow:hidden 失败的 BUG (WebKit).](http://www.html-js.com/article/Mczone-CSS-to-solve-the-element-borderradius-for-child-elements-of-the-overflowhidden-transform-applications-of-the-failure-of-BUG-with-webkitmaskimage)
* [移动端与border-radius有关的bug](http://makaiqian.com/yu-border-radiusyou-guan-de-bug/)
* [`<img>`元素底部为何有空白？](https://www.zhihu.com/question/21558138) 去除方法 `img{display:block;}` 或 `img { vertical-align:top/bottom/middle; }`


## <a name="double-margin">双边距</a>
IE6下,一个div盒子如果设置了margin和浮动，便会产生双边距问题。    
解决方案：给该div设置样式`_display:inline`。

## <a name="overflow-hidden-bug">`overflow:hidden`失效</a>
IE6，7下，当父元素的子元素的样式拥有`position:relative`时，父元素的`overflow:hidden`属性就会失效。    
解决方案：父元素也设置`position:relative`

## <a name="scroll-hidden-bug">滚动条bug</a>
IE6，7下，当固定了一个元素的宽高，纵向溢出（overflow-y）为滚动（scroll）或者自动（auto）时，当其子元素有`position:relative`时，子元素不会随滚动条滚动    
解决方案: 给该元素也设置`position:relative`

## <a name="repaint">浏览器未重绘导致的问题</a>
解决方式,用js,让其隐藏再显示
```
$elem.hide().show();
```

## <a name="float-li-3px">li底部3px的Bug</a>
IE6，7下，当li的子元素浮动（float），并且li设置了以下CSS属性之一：`width、height、zoom、padding-top、padding-bottom、margin-top、margin-bottom`，li会产生3px空隙。    
解决方案:给li的浮动的子元素上设置`vertical-align:top|middle|bottom`


## <a name="repeat-text">IE6注释bug</a>
IE6下，满足以下条件
* 一个容器包含2两个具有“float”样式的子容器。
* 容器的宽度大于父容器的宽度，或者父容器宽度减去第二个容器宽度的值小于3
* 在第二个容器前存在注释

会出现重复的字符内容
解决方案： 破坏其中一个触发条件。最简单方式：删除注释。


## <a name="over-flow-y">body上设置overflow-y:hidden的问题</a>

在ie6，7中，设置在body元素上`overflow-y:hidden`不能隐藏滚动条。    
解决方案：在html元素上也设置`overflow-y:hidden`

## <a name="text-v-center">Firefox下input button内文字不垂直居中</a>
解决方案：
```
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
input[type="file"] > input[type="button"]::-moz-focus-inner{
border:none;padding:0;
}
```


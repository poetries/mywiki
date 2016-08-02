# DOCTYPE和浏览器渲染模式
## DOCTYPE
DOCTYPE是用来指定，浏览器该用何种渲染模式。

## 渲染模式
> 浏览器根据渲染模式来决定如何渲染页面。出现渲染模式的目的的为了兼容一些老旧（不符合w3c标准）的的页面。

> 在浏览器中有三种模式: 怪癖模式（quirks mode），准标准模式（almost standards mode）和标准模式（standards mode）。
在怪癖模式下，浏览器会模拟Navigator 4和IE5的方式来渲染页面。在标准模式下，浏览器会用HTML和CSS规范定义的方式来渲染页面。
在准标准模式下，浏览器在少数部分情况下用怪癖模式来渲染。

> 不同浏览器的怪癖模式也是不一样的。在IE 6,7,8中的怪癖模式模拟IE5.5。在其他浏览器中，怪癖模式是对准标准模式的少量偏移。
如果写新的页面，那么请使用标准模式(<!DOCTYPE html>)。

## 浏览器决定使用哪种模式来渲染
* 内容类型为text/html（http的响应头中），根据页面开始的文档（DocumentType）声明来判断用何种渲染模式。若要用标准模式来渲染,推荐使用<!DOCTYPE html>，当然也可以使用html4.01的一些文档声明。 具体可参考 http://zh.wikipedia.org/wiki/%E6%80%AA%E5%BC%82%E6%A8%A1%E5%BC%8F 中的模式之间的差异和示例。  
* 内容类型为application/xhtml+xml，Firefox、Safari、Chrome和Opera中，application/xhtml+xml HTTP内容类型会触发XML模式。在XML模式中，浏览器尝试给XML文档在规范上的正确处理达到在制定浏览器中的程度。
IE6、7和8不支持application/xhtml+xml，Mac IE5也如此。

## 查看当前的浏览器渲染模式
* firefox中安装了webDeveloper插件后，可在webDeveloper工具条的最右边查看
* ie中可打开开发人员工具查看（快捷键F12）

## 何时会触发怪癖模式
* 缺少文档声明。
* 错误的文档声明。如<!DOCTYPE html PUBLIC>
* 在ie6,7,8,9的DocumentType之前放注释 如

``` 
<!-- This comment will put IE 6, 7, 8, and 9 in quirks mode -->        
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

## 怪癖模式带来的影响
怪癖模式带来的影响主要是css布局。如在 怪癖模式和标准模式之间一个突出的不同是对 CSS IE盒模型缺陷的处理。在某些浏览器(如IE)的怪癖模式下，盒模型（box model）变成[IE5.5的盒模型](http://css.kentucka.com/?box_model)（IE5.5的盒模型的width包括margin和padding），另一个值得一提的不同点是某些行内 (inline) 元素的垂直对齐；很多早期的浏览器对齐图片至包含它们的盒子的下边框，虽然 CSS 的规范要求它们被对齐至盒内文本的基线。标准模式下，基于 Gecko 的浏览器将会对齐至基线，而在 怪癖模式下它们会对齐至底部。以及表格不继承样式等。

## 参考
* http://www.w3schools.com/tags/tag_doctype.asp
* [mdn:Quirks Mode and Standards Mode](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode)
* [doctype](https://hsivonen.fi/doctype/)
* [whatwg怪癖模式的标准](http://quirks.spec.whatwg.org/)
* [firefox怪癖模式下，浏览器增加的css](http://mxr.mozilla.org/mozilla-central/source/layout/style/quirk.css)
* http://dancewithnet.com/2009/06/14/activating-browser-modes-with-doctype/
* http://en.wikipedia.org/wiki/Quirks_mode
* http://zh.wikipedia.org/wiki/%E6%80%AA%E5%BC%82%E6%A8%A1%E5%BC%8F

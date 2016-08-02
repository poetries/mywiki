# flexbox
2009年，W3C提出了一种新的方案----Flex布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

flexbox 很灵活，但是 flex 相关的概念满多的，并不是那么好学。

## 历史
如果你正在查找有关于Flexbox的博客资料，你看到了“display:box;”或者“box-{*}”属性，那么你看的正是2009年版本的Flexbox。

如果你正在查找有关于Flexbox的博客资料，你看到了“display:flexbox;”或者“flex()”函数，那么你看的正是2011年版本的Flexbox。

## 概念
注意：设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。

### flex-grow、flex-shrink、flex-basis详解
flex-grow、flex-shrink、flex-basis这三个属性的作用是：在[flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)中，父元素在不同宽度下，子元素是如何分配父元素的空间的。        

这三个属性都是在子元素上设置的。    
注：下面讲的父元素，指以flex布局的元素(display:flex)。

#### flex-basis
该属性来设置该元素的宽度。当然，`width`也可以用来设置元素宽度。如果元素上同时设置了`width`和`flex-basis`,那么`flex-basis`会覆盖`width`的值。

#### flex-grow
该属性来设置，当父元素的宽度大于所有子元素的宽度的和时（即父元素会有剩余空间），子元素如何分配父元素的剩余空间。    
`flex-grow`的默认值为0，意思是该元素不索取父元素的剩余空间，如果值大于0，表示索取。值越大，索取的越厉害。    
举个例子:    
父元素宽400px，有两子元素：A和B。A宽为100px，B宽为200px。
则空余空间为 400-（100+200）= 100px。    
如果A，B都不索取剩余空间，则有100px的空余空间。    
如果A索取剩余空间:设置flex-grow为1，B不索取。则最终A的大小为 自身宽度（100px）+ 剩余空间的宽度（100px）= 200px    
如果A，B都设索取剩余空间，A设置flex-grow为1，B设置flex-grow为2。则最终A的大小为 自身宽度（100px）+ A获得的剩余空间的宽度（100px * (1/(1+2))）,最终B的大小为 自身宽度（200px）+ B获得的剩余空间的宽度（100px * (2/(1+2))）


#### flex-shrink
该属性来设置，当父元素的宽度小于所有子元素的宽度的和时（即子元素会超出父元素），子元素如何缩小自己的宽度的。    
`flex-shrink`的默认值为1，当父元素的宽度小于所有子元素的宽度的和时，子元素的宽度会减小。值越大，减小的越厉害。如果值为0，表示不减小。    
举个例子:    
父元素宽400px，有两子元素：A和B。A宽为200px，B宽为300px。
则A，B总共超出父元素的宽度为（200+300）- 400 = 100px。    
如果A，B都不减小宽度，即都设置flex-shrink为0，则会有100px的宽度超出父元素。    
如果A不减小宽度:设置flex-shrink为0，B减小。则最终B的大小为 自身宽度（300px）- 总共超出父元素的宽度（100px）= 200px    
如果A，B都减小宽度，A设置flex-shirk为3，B设置flex-shirk为2。则最终A的大小为 自身宽度（200px）- A减小的宽度（100px * (3/(2+3))）,最终B的大小为 自身宽度（300px）- B减小的宽度（100px * (2/(2+3))）


## 浏览器兼容性
[Can I use](http://caniuse.com/#search=flexbox)




## demo
* [布局demo](https://htmlpreview.github.io/?https://github.com/iamjoel/front-end-note/blob/master/detail/css/layout/flexbox/layout.html)
* [色子demo](https://htmlpreview.github.io/?https://github.com/iamjoel/front-end-note/blob/master/detail/css/layout/flexbox/dice-demo.html)




## 参考资料
* [Flex 布局语法教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html) 阮一峰
* [Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html) 阮一峰
* [一个完整的Flexbox指南](http://www.w3cplus.com/css3/a-guide-to-flexbox-new.html)
* [CSS 伸缩盒布局模组](http://www.w3.org/html/ig/zh/css-flex-1/)
* http://www.w3cplus.com/css3/old-flexbox-and-new-flexbox.html
* http://www.html5rocks.com/zh/tutorials/flexbox/quick/
* http://css-tricks.com/snippets/css/a-guide-to-flexbox/

## 推荐阅读
* [flexbox froggy](http://flexboxfroggy.com/) flexbox教程。将青蛙放到位置。
* [Grid, Flexbox, Box Alignment: Our New System for Layout](https://24ways.org/2015/grid-flexbox-box-alignment-our-new-system-for-layout)
* [Flexbox For Interfaces All The Way: Tracks Case Study](https://www.smashingmagazine.com/2015/11/flexbox-interfaces-tracks-case-study/)
* [FLEXBOX MYTH BUSTING](http://jonyablonski.com/2015/flexbox-myth-busting/) flexbox 一些坑的地方
* [flexible future for web design with flexbox](https://www.smashingmagazine.com/2015/08/flexible-future-for-web-design-with-flexbox/)

## 其他
* [flexbugs](https://github.com/philipwalton/flexbugs) flexbox bug 列表
* [cross browser flexbox](https://dev.opera.com/articles/advanced-cross-browser-flexbox/) opera dev
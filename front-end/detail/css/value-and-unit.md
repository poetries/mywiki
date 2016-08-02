# 样式规则的值的类型及单位

## <a name="percent">CSS属性中的百分比</a>
百分比是一个相对值。其实际的值为`基数*百分比`。在不同的CSS的属性值中的基数是不一样的。    
* 基数为包含块的宽度 margin, padding, left, right, text-indent, width, max-width, min-width
* 基数为包含块的高度 top, bottom, height, max-height, min-height
* 基数为自身尺寸 border-radius，transform: translate
* 基数为字体大小 line-height
* 基数为行高 vertical-align

关于包含块（containing block）的概念，不能简单地理解成是父元素。如果是静态定位和相对定位，包含块一般就是其父元素。但是对于绝对定位的元素，包含块应该是离它最近的 position 为 absolute、relative、或者 fixed 的祖先元素。对固定定位的元素，它的包含块是视口（viewport）。具体可以参考 W3Help。


背景定位中的百分比 background-position 分别设置水平方向和垂直方向上的两个值，如果使用百分比，那么百分比值会同时应用于元素和图像。例如 50% 50% 会把图片的（50%, 50%）这一点与框的（50%, 50%）处对齐，相当于设置了 center center。同理 0% 0% 相当于 left top，100% 100% 相当于 right bottom。

字体大小中的百分比 font-size 中的百分比值应该乘以元素所继承到的字体大小，也就是父元素的字体大小。

### 百分比值的继承
当百分比值用于可继承属性时，只有结合参照值计算后的绝对值会被继承，而不是百分比值本身。例如，一个元素的font-size是14px，并定义了line-height:150%;，那么该元素的下一级子元素继承到的line-height就是21px，而不会再和子元素自己的font-size有关。


## 参考
* [CSS学习笔记(五) 规则声明](http://segmentfault.com/blog/dopppler/1190000002427851)
* [度量单位](http://www.way2tutorial.com/css/reference/type-of-css-measurement-units.php)
* [CSS 属性之中经常出现的百分比（转）](http://www.w3ctech.com/topic/128)
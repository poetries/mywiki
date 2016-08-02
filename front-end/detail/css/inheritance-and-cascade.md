# 样式的继承和层叠
## 样式的继承
CSS样式表继承指的是，特定的CSS属性向下传递到子孙元素。    
需要注意的是
* 只有某些样式规则会继承
* 样式规则是否继承是由浏览器决定的

### 会继承的样式规则
会继承的样式主要包括：
* 字体相关的：font-family, font-size(继承计算后的值), font-style,font-variant, font-weight, font, letter-spacing,line-height
* 文本：text-indent, text-align, layout-flow, writing-mode, white-space, word-wrap, text-kashida-space, layout-grid, layout-grid-char, layout-grid-char-spacing, layout-grid-line, layout-grid-mode, layout-grid-type
* 列表相关的：list-style-image, list-style-position,list-style-type, list-style
* 表格：border-collapse, border-spacing, caption-side, empty-cells, table-layout, speak-header

## 层叠
层叠，是一种样式在文档层次中逐层叠加的过程。目的是让浏览器面对某个标签特定属性值的多个来源，确定最终使用哪个值。

对于层叠来说，样式的主要来源：
* 浏览器默认样式
* 用户样式表
* 开发者定义的样式：
	* 定义在外部文件（外链样式）
	* 在页面的头部定义（内联样式）
	* 定义在特定的元素身上（行内样式）

用户是指有特别需求的用户，例如视障人士，他们可以通过用户样式表，强制浏览器加载的所有网站都以更大的字号，更容易分辨的颜色显示内容。


### 选择器权重
各类选择器的权重得分
* 带 !important 的规则得分是最高的
* 行内样式（style="..."）1000分
* ID选择器 100分
* 类选择器，伪类选择器，属性选择器 10分
* 标签选择器，伪元素选择器 1分
* 通配选择器 0分
* 继承和浏览器默认的的样式的得分是最低的

由上可知，越特定的选择器，权重越高。

当有多个规则都能应用于同一个元素时，权重越高的样式将被优先采用。若权重相同，则后定义的被采用。
任何一条与css继承值冲突的属性值都会覆盖继承的属性值。

更多可查看 http://css-tricks.com/specifics-on-css-specificity/

## 作业
给几个选择器，算结果

## 参考
https://docs.webplatform.org/wiki/tutorials/inheritance_and_cascade
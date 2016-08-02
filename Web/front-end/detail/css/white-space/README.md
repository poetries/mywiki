# white-space 属性
white-space 是 CSS 的属性。从字面上来看，这是一个与空白相关的属性。好像也没啥东西，但从其实没那么简单。    

## 详细介绍
white-space 属性可以包括以下 3 个方面内容

**1 如何处理文本内容中的多个空格和 Tab？ **
策略1: 折叠。如果多个空格和 Tab 在文本内容中间，则合成一个空格；如果在文本内容开头，则忽略。如
```
    A bunch   of 此处有Tab   words you see.中文       测试。
```
折叠后变成
```
A bunch of words you see.中文 测试。
```

策略2: 保持原样。有几个空格，Tab 就显示几个。

**2 如何处理换行符？**
策略1: 忽略。如
```
<div>aaa
bbb</div>
```
忽略后变成
```
<div>aaabbb</div>
```

策略2: 换行。

**3 在文本内容超出容器宽度时，如何处理？**
策略1: 换行。
策略2: 不换行。

white-space 有如下可选值
* normal(默认值)
* nowrap
* pre
* pre-wrap
* pre-line

这些值的具体说明

|         |  换行符  | 空格和 Tab  | 文本超出容器宽度 |
| :------ |:-------:|:----------:| :------------:|
| nomal   | 忽略     | 折叠        | 换行          |
| nowrap  | 忽略     | 折叠        | 不换行 		 |
| pre     | 换行     | 保持原样     | 不换行 		 |
| pre-wrap| 换行     | 保持原样     | 换行 		 |
| pre-line| 换行     | 折叠         | 换行 		 |


## 兼容性
主流浏览器，甚至包括 IE6 都支持 white-space 的所有值。

## 吐槽
这个属性比较让人不爽的。只看其值并不能轻松的知道其具体的设置。如果将其拆分成三个属性：
* new-line ：值为 preserve 或 collapse
* space-and-tab： 值为 preserve 或 collapse
* text-wrapping: 值为 wrap 或 nowrap

然后 white-space 为以上属性的一个简写
```
white-space: [new-line] [space-and-tab] [text-wrapping];
```

这样，理解 white-space 简单的多，设置起来也灵活的多。

## 参考
* [网易微专业之《前端工程师》学习笔记（1）-CSS文本格式](http://www.jianshu.com/p/e5fc6a4be0b5)
* [white-space](https://css-tricks.com/almanac/properties/w/whitespace/)
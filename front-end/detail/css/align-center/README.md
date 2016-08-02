# 元素居中 [demo](http://htmlpreview.github.io/?https://github.com/iamjoel/front-end-note/blob/master/detail/css/align-center/demo/index.html)
元素的居中主要分为水平居中和垂直居中。
## 水平居中
### 元素内的行内元素
在元素上加
```
text-align:center;
```

### 宽度固定的块级元素
在元素上加
```
width: 宽度值;
margin-left: auto;
margin-right: auto;
```
或者用绝对定位
```
position: absolute;
width: 宽度值;
left: 50%;
margin-left: -(宽度值/2);
```

### 宽度不固定的块级元素
#### 方法1
用`display:inline-block`。通过以下几个步骤

1. 元素设置`text-align:center;`
1. 元素设置`font-size:0;`。这样做是为了去除子元素间的空格的占位
1. 子元素设置`display:inline-block;`

#### 方法2
需要通过以下几个步骤

1. 让元素的宽度变为所包含元素的内容。可以用浮动或绝对定位。
1. 元素向左移动其父级元素宽度的50%
1. 子元素向左移动其父级元素宽度的50%

例如，有如下的HTML结构
```
<ul id="no-sure-width-2">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>

```

样式为
```
#no-sure-width-2 {
    list-style: none;
    position: absolute;
    left: 50%;
    /* 用下面的两个样式 和使用 position: absolute;是等效的。本质上都是让元素的宽度变为所包含元素的宽度 */
    /*float:left;
    position: relative;*/

}

#no-sure-width-2>li {
    float: left;
    position: relative;
    left: -50%;
    /*right: 50%;*/ /*left -50%和right 50% 是等价的*/
    /*将每个分页项向左移动父元素宽度的50%*/
    background-color: #ddd;
    color: #fff;
    width: 20px;
    height: 24px;
    line-height: 24px;
    text-align: center;
}
```


## 水平居中总结
上面介绍的方法都是浏览器兼容性比较好的。兼容IE8+，Chrome，Firefox等。

还可以使用CSS3的flexbox，transform等方式来实现水平居中。但使用这些CSS3特性来做居中时，要注意下兼容性。

详细描述和更多实现见[六种实现元素水平居中](http://www.w3cplus.com/css/elements-horizontally-center-with-css.html)

## 垂直居中
### 单行文本的垂直居中
只需让元素的line-height设置成和height一样即可

## 高度不固定的元素的垂直居中
元素加
```
display: table; /*让元素以表格形式渲染*/
height: 200px; /* 需要定宽，定高 */
width: 100px;
```

子元素加
```
display: table-cell;/*让元素以表格的单元素格形式渲染*/
vertical-align: middle;
```

## 参考
* [CSS制作水平垂直居中对齐](http://www.w3cplus.com/css/vertically-center-content-with-css)
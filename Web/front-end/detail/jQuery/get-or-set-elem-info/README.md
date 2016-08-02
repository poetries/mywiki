# 获取和设置元素信息
## 属性
* .attr('属性名' [,值] )
* .prop('属性名' [,值] )
* removeAttr('属性名') 删除属性

attr 和 prop 的区别是： attr 在 DOM 中, 如 `$('a').attr('title')`, DOM: `<a title="aaa"></a>`)，prop 不一定在 DOM 中, `$('a').attr('tagName')`,但 a 没有 tagName 这个属性。

用 prop 的属性用
* checked
* outerHTML
* tagName

## 样式
.css

```
$el.css('color');
$el.css('color', 'red');
$el.css({
  'font-size': '16px',
  'border': 'none'
});
```

## 尺寸
* .height
* .innerHeight: height + 垂直方向的padding
* .outerHeight( [includeMargin ]): height + 垂直方向的 padding，border + 可选的 margin
* .width
* .innerWidth
* .outerWidth

## 位置
* position: 返回元素相对于其定位父元素（position为relative，absolute和fixed）的位置。包括属性left和top。
* offset: 返回元素相对于浏览器窗口的位置。包括属性left和top。
* .offset(坐标/返回坐标的函数)：设置元素相对于浏览器窗口的位置。



## 是否满足某个条件
.is。如是否可见
```
$(selector).is(':visible');
```

## 元素的innerHTML
* .html()
* .html(html)

```
$(selector).html();
```

## 获取元素的标签名
```
$(selector).prop("tagName").toLowerCase();
```
$(selector).prop("tagName")返回的为全大写的

## 获取元素的outerHTML
```
$(selector).prop('outerHTML');
```

## 获取元素的文本内容
```
$(selector).text();
```

## 数据
.data

## 元素的显示隐藏
* .show
* .hide
* .toggle 切换显示，隐藏的状态
* 以动画的方式，显示隐藏
  * fadeIn, fadeOut, fadeToggle
  * slideUp, slideDown, slideToggle


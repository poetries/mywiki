# 字体样式规则
## 目录
* [字体名称](#font-family)
* [字体大小](#font-size)
* [颜色](#color)
* [行高](#line-height)
* [粗细](#font-weight)
* [风格](#font-style)
* [字体](#font)
* [水平对齐](#text-align)
* [缩进](#text-indent)
* [修饰](#text-decoration)
* [溢出处理](#text-overflow)
* [垂直对齐](#vertical-align)
* [空格处理](#white-space)
* [其他一些字体样式规则](#others)
* [生效规则](#rules)
* [使用注意点](#tips)

## <a name="font-family">font-family</a>
指定字体名称。字体名称之间用逗号分割。浏览器会使用第一个认识的字体。如
```

font-family: Georgia, "Times New Roman",
             "Microsoft YaHei", "微软雅黑",
             STXihei, "华文细黑",
             serif;
```

## <a name="font-size">font-size</a>
指定字体大小。如
```
p{
	font-size: 14px;
}
p small{
	font-size: 80%;
}
```

## <a name="color">color</a>
指定文字的颜色。可选值见[这里](color.md)


## <a name="line-height">line-height</a>
指定行高。如
```
p{
	line-height: 1.1em;
}
div{
	line-height: 24px;
}
```

## <a name="font-weight">font-weight</a>
指定字的粗细。可选值为
* inherit
* normal
* bolder（更粗）
* bold（粗）
* lighter（细）
* 100,200,300,400,500,600,700,800,900（值越大越粗，没有单位）

## <a name="font-style">font-style</a>
属性指定字体的风格。可选值
* normal(默认值)
* italic 用字体的斜体属性
* oblique 让字体倾斜
* inherit 从父元素继承字体样式

所有主流浏览器都支持 font-style 属性。    
任何的版本的 Internet Explorer （包括 IE8）都不支持属性值 "inherit"

### italic 与 oblique的区别
一种字体有粗体、斜体、下划线、删除线等诸多属性。但是并不是所有字体都做了这些，一些不常用的字体，或许就只有个正常体，如果你用 italic，就没有效果了~这时候你就要用Oblique。    
换种说法：italic 是指斜体字，而Oblique是让文字倾斜。对于没有斜体的字体应该使用Oblique属性值来实现倾斜的文字效果。对于有斜体属性的字，使用italic和oblique是一样的。

## <a name="font">font</a>
font由 font-style, font-variant, font-weight, font-size, line-height and font-family组成。
如
```
font: italic bold 1.5em/2 arial, Helvetica, sans-serif;
```

## <a name="text-align">text-align</a>
指定元素内文本的水平对齐方式。可选值
* left 左对齐
* right 右对齐
* center 居中对齐
* justify 两端对齐

## <a name="text-indent">text-indent</a>
指定缩进。如，段落缩进两个字符
```
p{
	text-indent: 2em;
}
```
隐藏文字可以用
```
.hide-text{
	text-indent: -99999px;
}
```

## <a name="text-decoration">text-decoration</a>
对文本进行修饰。可选值
* none
* underline 下划线
* overline 上划线
* line-through 中划线


## <a name="text-overflow">text-overflow</a>
指定文本超过元素大小时候的处理方式。    
单行文本溢出加省略号
```
white-space: nowrap;/* 必须要设置这个 */
overflow: hidden;
text-overflow: ellipsis;
-o-text-overflow: ellipsis;
```

## <a name="vertical-align">vertical-align</a>
用于垂直对齐inline元素，也就是display值为inline和inline-block的元素。这个属性比较复杂，见
* [[翻译]关于Vertical-Align你需要知道的事情](http://segmentfault.com/a/1190000002668492)
* [垂直居中之vertical-align详解](http://lingyu.wang/2014/04/13/vertical-align/)

## <a name="white-space">white-space</a>
指定元素的内容中有空格时如何处理。    
比较多的用法是，当元素内容中没用空格时，禁止部分内容换行。
```
white-space: nowrap;
```

## <a name="others">其他一些字体样式规则</a>
* [font-stretch](https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch) 对字进行进行伸缩变形
* @font-face 定义字体
* text-transform 控制文本的大小写
* text-shadow 控制文本阴影效果
* font-variant 指定是否把小写字母转化成字号变小的大写字母

## <a name="rules">生效规则</a>
1. 优先使用排在前面的字体。
1. 如果找不到该种字体，或者该种字体不包括所要渲染的文字，则使用下一种字体。
1. 如果所列出的字体，都无法满足需要，则操作系统自行决定使用哪种字体。

## <a name="tips">使用注意点</a>
1. 绝大部分中文字体里包含英文字母（基本上都很丑），而英文字体是不包含中文字符的。因此 font-family 应该优先指定英文字体，然后再指定中文字体。否则，中文字体所包含的英文字母，会取代英文字体，而这往往很丑的。
1. 把 Mac 支持的字体放在 Windows 前面。因为有一部分Mac用户装了Windows 下的常用字体（这得归功于 Office for Mac），但极少的Windows 用户装了Mac的常用字体。
1. 为了保证兼容性，中文字体的中文名称和英文名称，应该都写入font-family。比如，"微软雅黑"的英文名称是Microsoft YaHei。
1. 如果字体名称中间有空格，则要用双引号把字体名称包起来。如 "Microsoft Yahei"。
# 字体图标(icon-fonts)
## 是什么字体图标
字体图标就是图标做成字体。用CSS提供的 @font-face 可以定义字体文件。

## 与用位图做图标比较
字体图标的优势为：    
* 自由变化大小，并且不会因为图标大小变化而出现模糊的情况（因为是矢量的）。
* 自由修改颜色
* 可以添加一些视觉效果如：阴影、旋转、透明度。
* 兼容IE6

## 制作过程
1. 用 AI 做图标。 图标制作说明以及注意事项见[这里](http://iconfont.cn/help/iconmake.html)[注1]。
1. 将AI 做好的图标导出为 SVG 文件。
1. 在 [IconMoon](https://icomoon.io/app/#/select) [注2] 上在上传 SVG， 生成并下载生成的结果[注3]。

更详细的制作过程见[这里](http://www.w3cplus.com/css3/how-to-turn-your-icons-into-a-web-font.html)

### 注
1. 发现一个文件只能做一个图标。目前还不知道如何在一个文件中放多个图标。
1. 如果发现访问比较慢，可以上阿里巴巴UX部门做的 [iconfont](http://iconfont.cn/)。
1. 下载的内容包括：
	1. 格式为 eot, ttf, woff 和 svg 的字体文件
	1. css文件
	1. 显示所以图标的 html 文件

## 可能会出现的一些坑
字体图标在safair或chrome浏览器下被加粗？
以上现象是由于字体图标存在半个像素的锯齿，在浏览器渲染的时候直接显示一个像素了，导致在有背景下的图标显示感觉加粗；所以在应用字体图标的时候需要对图标样式进行抗锯齿处理，CSS代码设置如下：
```
-webkit-font-smoothing: antialiased;
```

pc端的chrome浏览器下出现严重的锯齿。
可以对字体图标的边缘进行模糊；（只支持webkit内核浏览器,参数数值不宜设置得很大，这会带来图标加粗的问题）。
```
-webkit-text-stroke-width: 0.2px;
```

## 其他工具
* [Font Squirrel](http://www.fontsquirrel.com/tools/webfont-generator) 可以将 ttf 的字体文件转化成 eot, woff, woff2, TrueType, SVG 的字体文件的在线工具
* [Inkscape](https://inkscape.org/zh/) 制作字体的一个免费软件。


## 相关阅读
* [周刊3# Web字体图标专刊](http://www.w3cplus.com/collective-3.html)
* [seriously-dont-use-icon-fonts](http://blog.cloudfour.com/seriously-dont-use-icon-fonts/) 为什么用 svg icons 替代 iconfont
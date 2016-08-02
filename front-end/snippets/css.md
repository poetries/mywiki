# CSS代码片段
## 字体
```
/*
	雅黑
	"STXihei" 是微软雅黑在Mac平台上的对应字体
*/
.ff-yahei{
	font-family: tahoma,arial,"STXihei","Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", "宋体", SimSun;
}
/* 普通黑体 */
.ff-hei{
    font-family: tahoma,arial,"STXihei",SimHei,"Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", "宋体", SimSun;
}
/* 宋体 */
.ff-song{
	font-family: tahoma,arial,"宋体", SimSun;
}
```

## 清浮动
```
.clearfix:before, .clearfix:after {
    content: " ";
    display: table;
}
.clearfix:after {
    clear: both;
}
.clearfix {
    *zoom: 1;
}
```

## CSS Hacks（Browser Specific Hacks）
见 [browserhacks](http://browserhacks.com/)

## 跨浏览器的透明度
```
.transparent_class {
  /* IE 8 */
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";

  /* IE 5-7 */
  filter: alpha(opacity=50);

  /* Netscape */
  -moz-opacity: 0.5;

  /* Safari 1.x */
  -khtml-opacity: 0.5;

  /* Good browsers */
  opacity: 0.5;
}
```

## 对SEO和可访问性友好的隐藏元素的方法
```
#content {
    position: absolute;
    top: -9999px;
    left: -9999px;
}
```
如果是一个元素用背景图来代替文本，需要隐藏文本，可用
```
.text{
	text-indent: -9999px;
}
```

注意：如果不合适的使用这种方法，会导致搜索引擎将该页面列为黑名单。

## 标出页面中存在问题的元素（Diagnostic CSS）
```
/* 空元素 */
div:empty, span:empty, li:empty, p:empty, td:empty, th:empty
{ padding: 20px; border: 5px dotted yellow !important; }

/* 某些属性不该为空 */
*[alt=""], *[title=""], *[class=""], *[id=""], a[href=""], a[href="#"]
{ border: 5px solid yellow !important; }

/* 废弃的元素 */
applet, basefont, center, dir, font, isindex, menu, s, strike, u
{ border: 5px dotted red !important; }

/* 废弃的属性 */
*[background], *[bgcolor], *[clear], *[color], *[compact], *[noshade], *[nowrap], *[size], *[start],
*[bottommargin], *[leftmargin], *[rightmargin], *[topmargin], *[marginheight], *[marginwidth], *[alink], *[link], *[text], *[vlink],
*[align], *[valign],
*[hspace], *[vspace],
*[height], *[width],
ul[type], ol[type], li[type]
{ border: 5px solid red !important; }
```

## 对某个具体的标准设备的Media Queries
见 https://css-tricks.com/snippets/css/media-queries-for-standard-devices/

## 去除IE6对png24图片的灰色背景
背景图
```
.yourselector {
   width:200px;
   height:100px;
   background: url(/folder/yourimage.png) no-repeat;
   _background:none;
   _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/folder/yourimage.png',sizingMethod='crop');
}
```

图片
```
img, .png {
   position: relative;
   behavior: expression((this.runtimeStyle.behavior="none")&&(this.pngSet?this.pngSet=true:(this.nodeName == "IMG" && this.src.toLowerCase().indexOf('.png')>-1?(this.runtimeStyle.backgroundImage = "none",
   this.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + this.src + "', sizingMethod='image')",
   this.src = "images/transparent.gif"):(this.origBg = this.origBg? this.origBg :this.currentStyle.backgroundImage.toString().replace('url("','').replace('")',''),
   this.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + this.origBg + "', sizingMethod='crop')",
   this.runtimeStyle.backgroundImage = "none")),this.pngSet=true));
}
```

## 两端对齐
如果是要让`display:inline-block;`的元素两端对其需要
* 容器设置 `text-align: justify;`
* 容器设置
```
容器选择器:after {
        content: '';
        display: inline-block;
        width: 100%;
 }
 ```

注意：如果元素之间没有空格(用js动态生成的)，则不会生效。这时候可以用 flex
```
容器选择器{
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
}
```

## 文本溢出加省略号
```
  overflow:hidden;
  white-space:nowrap;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
```

注意这对内联元素无效。

## 参考
* https://css-tricks.com/snippets/css/

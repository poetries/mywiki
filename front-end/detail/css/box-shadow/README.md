# box shadow
## 语法
```
box-shadow: [horizontal offset] [vertical offset] [blur radius] 
[optional spread radius] 
[optional color] [inset];
```

说明：    
* h-shadow	必需。水平阴影的位置。允许负值。
* v-shadow	必需。垂直阴影的位置。允许负值。
* blur	可选。模糊距离。默认值为0。
* spread	可选。阴影的尺寸。默认值为0。若为正值，则比自身大，负值则比自身小。
* color	可选。阴影的颜色。
* inset	可选。将外部阴影 (outset) 改为内部阴影。值为inset。

box shadow支持多个值,值之间用`,`分隔。例如
```
.text{
	box-shadow: inset 5px 5px 10px #000000,
		inset -5px -5px 10px blue;
}
```

## 让IE也支持的box shadow写法
```
.shadow1 {
  margin: 40px;
  background-color: rgb(68,68,68); /* Needed for IEs */

  -moz-box-shadow: 5px 5px 5px rgba(68,68,68,0.6);
  -webkit-box-shadow: 5px 5px 5px rgba(68,68,68,0.6);
  box-shadow: 5px 5px 5px rgba(68,68,68,0.6);

  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30);
  -ms-filter: "progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30)";
  zoom: 1;
}
.shadow1 .content {
  position: relative; /* This protects the inner element from being blurred */
  padding: 100px;
  background-color: #DDD;
}
```

## 拓展阅读
* [CSS3 制作Drop Shadow效果](http://www.w3cplus.com/css3/box-drop-down-shadow-with-css3)

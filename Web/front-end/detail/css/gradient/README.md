# 渐变
线性渐变兼容性的写法
```
.gradient {
  
  /* Fallback (could use .jpg/.png alternatively) */
  background-color: red;

  /* SVG fallback for IE 9 (could be data URI, or could use filter) */
  background-image: url(fallback-gradient.svg); 

  /* Safari 4, Chrome 1-9, iOS 3.2-4.3, Android 2.1-3.0 */
  background-image:
    -webkit-gradient(linear, left top, right top, from(red), to(#f06d06));
  
  /* Safari 5.1, iOS 5.0-6.1, Chrome 10-25, Android 4.0-4.3 */
  background-image:
    -webkit-linear-gradient(left, red, #f06d06);

  /* Firefox 3.6 - 15 */
  background-image:
    -moz-linear-gradient(left, red, #f06d06);

  /* Opera 11.1 - 12 */
  background-image:
    -o-linear-gradient(left, red, #f06d06);

  /* Opera 15+, Chrome 25+, IE 10+, Firefox 16+, Safari 6.1+, iOS 7+, Android 4.4+ */
  background-image:
    linear-gradient(to right, red, #f06d06);

   /* "Invalid", but works in 6-8 */
filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#1471da, endColorstr=#1C85FB);

	/* Valid, works in 8-9 */
-ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr=#1471da, endColorstr=#1C85FB)";

}
```

demo 见 [这里](demo.html)    
详细见 https://css-tricks.com/css3-gradients/    

## 圆锥渐变(conic-gradient)
见[conic-gradient](http://leaverou.github.io/conic-gradient/)

## 工具
* [Ultimate CSS Gradient Generator](http://www.colorzilla.com/gradient-editor/) CSS渐变代码在线生成工具
* [gradient animator](http://www.gradient-animator.com/) CSS渐变动画在线生成工具
* [gradify](https://github.com/fraser-hemp/gradify) 用渐变的背景做站位图
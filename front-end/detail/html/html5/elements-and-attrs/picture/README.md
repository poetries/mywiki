# Picture元素
我们希望在不同尺寸的屏幕的屏幕上加载不同的图片，用Picture元素就可以实现这样的效果。例如
```
<picture>
    <source srcset="image/extralarge.jpg" media="(min-width: 1200px)">
    <source srcset="image/large.jpg"  media="(min-width: 960px)">
    <source srcset="image/small.jpg"  media="(max-width: 768px)">
    <img srcset="image/medium.jpg" alt="My default image">
</picture>
```

如果要不同像素密度下用不同的图片，可以用`图片地址 nx`的方式，如
```
<picture>
    <source srcset="smaller.jpg, smaller_retina.jpg 2x" media="(max-width: 768px)">
    <source srcset="default.jpg, default_retina.jpg 2x">
    <img srcset="default.jpg, default_retina.jpg 2x" alt="My default image">
</picture>
```

## 浏览器兼容性
IE，Safari,低版本的Firefox都不支持，但通过使用[picturefill](http://scottjehl.github.io/picturefill/)就支持了。

比较好用，只需要引入picturefill.js。使用类似这样的结构
```
<picture>
	<!--[if IE 9]><video style="display: none;"><![endif]-->
    <source srcset="image/extralarge.jpg" media="(min-width: 1200px)">
    <source srcset="image/large.jpg"  media="(min-width: 960px)">
    <source srcset="image/small.jpg" media="(max-width: 768px)">
    <!--[if IE 9]></video><![endif]-->
    <img srcset="image/medium.jpg" alt="My default image">
</picture>
```
如果要兼容IE8-，加上
```
<!--[if lt IE 9]><video style="display: none;">
    <script>
		// Picture element HTML shim|v it for old IE (pairs with Picturefill.js)
		document.createElement( "picture" );
	</script>
<![endif]-->
```
即可。

## 拓展阅读
* [Quick Tip: How to Use HTML5 “picture” for Responsive Images](http://webdesign.tutsplus.com/tutorials/quick-tip-how-to-use-html5-picture-for-responsive-images--cms-21015)
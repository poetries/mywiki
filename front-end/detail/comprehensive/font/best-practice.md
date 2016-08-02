# 最佳实践
### [使Chrome字体渲染更平滑](http://swordair.com/smoother-font-randering-in-chrome/)
Chrome在字体大于48px时，锯齿很明显。     
解决
普通文字用
```
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
```

icon font用用SVG替代WOFF。    
例如
```
@font-face {
  font-family: 'FontAwesome';
  src: url('../fonts/fontawesome-webfont.eot?v=4.1.0');
  src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.1.0') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff?v=4.1.0') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.1.0') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.1.0#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}

@media screen and (-webkit-min-device-pixel-ratio:0) { /* 对chrome */
    @font-face {
        font-family: 'FontAwesome';
        src: url('../fonts/fontawesome-webfont.svg?v=4.1.0#fontawesomeregular') format('svg');
    }
}
```
注：更新到了chrome37，chrome字体渲染问题居然已经被解决了。

### [10个增强WEB字体排版的JQUERY插件](http://www.uisdc.com/10-jquery-plugins-to-enhance-your-web-typography)
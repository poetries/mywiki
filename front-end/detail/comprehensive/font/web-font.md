# Web 字体
使用自定义字体。

## 定义
```
@font-face {
  font-family: 'MyWebFont';
  src: url('webfont.eot'); /* IE9 Compat Modes */
  src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
       url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
       url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}
```

## 使用
```
body {
  font-family: 'MyWebFont', Fallback, sans-serif;
}
```

## 加载策略
分为3种：

1. 先使用系统默认字体渲染文本；等 Web 字体下载完，使用新字体再渲染一次
1. 等到 Web 字体下载完成，才渲染文本。也就是字体下载完全阻塞对应文本渲染
1. 先跳过文本的渲染；一段时间后，如果 Web 字体仍未下载完，使用系统默认字体渲染文本；等字体下载完，再次渲染

策略1：用户可以第一时间看到文本内容，缺点是：两种字体之间的差异，一定会造成内容抖动。    
策略2：免了内容抖动，坏处是：字体下载需要多久，用户就有多久完全看不到文本内容。    
策略3：如果 Web 字体能在一段时间内加载完，不会有因为字体变换带来的抖动；同时如果加载字体需要很久，也不至于不显示文本。

## 参考
* [Using @font-face](https://css-tricks.com/snippets/css/using-font-face/)
* [Chrome 和 Web Fonts 二三事](https://www.imququ.com/post/chrome_and_web_fonts.html)
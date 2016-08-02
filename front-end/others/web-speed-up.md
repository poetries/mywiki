# 减少网站响应时间概要
## 概要
* 减少HTTP请求文件的大小
	* 精简html的DOM元素数量
	* 压缩css，js代码
	* 图片文件选用合适的格式。对于色彩数不是很丰富的图片，使用`png`格式
    * 压缩图片。使用类似[pngcrush](http://pmt.sourceforge.net/pngcrush/)的工具
    * 服务器端启用gzip压缩
    * 静态资源放在没有cookie的domain下
    * 减小cookie大小
    * 减小网站标题图标（favicon.ico）的大小
* 减少HTTP请求数
	* 合并文件。比如将所有的样式表合并成一个，所有脚本文件合并成一个
	* 合并一些图标类图片。图标类图片做成图片精灵（[CSS Sprites](http://alistapart.com/article/sprites)）
* 缓存
    * 静态资源的缓存
    * ajax的缓存
    * 减少样式和脚本的内联。因为内联的是没法被缓存的
* 减少网页等待时间
	* 避免资源的404
	* 脚本文件放在`</body>`前
    * 对图片进行Lazyload
    * 一块一块的输出`html`。可参考Facebook的Bigpipe的思想。
* 使用CDN

## 术语
### TTFB（Time To First Byte）
最初的网络请求被发起到从服务器接收到第一个字节这段时间。

### DNS时间
用户在浏览器输入网址名称（网址）后，浏览器通过查询DNS服务器所需要的时间

### 建立连接时间
根据TCP协议要求，请求方（浏览器等）与接受方（服务器）经过一系列协商所需要的时间

### 服务器处理时间
接收方（服务器）处理请求所需时间

### 数据传输时间
从请求方（浏览器等）到接收方（服务器）以及从接收方（服务器）到请求方的时间

### 白屏时间
用户浏览器输入网址后至浏览器出现至少1px图片为止

### 首屏时间
用户浏览器首屏内所有的元素呈现所花费时间

### 用户可操作时间(dom ready)
网站某些功能可以使用的时间

### 页面总下载时间(onload)
网站中所有资源加载完成并且可用时间


## 参考
* https://developer.yahoo.com/performance/rules.html
* [处理网页图片最常见的10个错误及其解决方案](http://www.oschina.net/translate/top_10_mistakes_in_handling_website_images_and_how_to_solve_them)
* [BigPipe的技术实现【转】](http://www.webdoes.com/archives/462.html)

## 拓展阅读
* [移动H5前端性能优化指南](http://isux.tencent.com/h5-performance.html)
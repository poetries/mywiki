# 脚本写在哪
一般放在`</body>`前。    
因为当浏览器解析DOM文档时，一旦遇到 script 标签（没有defer 和 async 属性）就会立即下载并执行，与此同时浏览器对文档的解析将会停止。

## 参考
* [HTML中的script标签研究](http://segmentfault.com/a/1190000002810487)
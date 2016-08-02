# ajax
ajax是Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）的简称。    
使用ajax可以实现在不重新加载（即刷新）整个页面的情况下与服务器交换数据。

## 跨域
默认情况下，ajax是不支持跨域的。    
如果要跨域主要有两种方式实现
* CORS（跨域资源共享，Cross-Origin Resource Sharing） 需要服务器设置相应头 `Access-Control-Allow-Origin`的值为`*`(任意站)，或具体的域名,如`http://www.google.com`。 支持各种方法
* jsonp 只支持Get

## 推荐阅读
* [Ajax 简介[RUNOOB.com]](http://www.runoob.com/ajax/ajax-intro.html)
* [jQuery ajax() 方法 [RUNOOB.com]](http://www.runoob.com/jquery/ajax-ajax.html)



# 浏览器缓存
## 浏览器加载资源的一个大概的流程
浏览器在加载资源时，先看缓存中是否有该资源，如果有，则根据这个资源的一些 http header 判断它是否命中强缓存，强缓存如果命中，浏览器直接从自己的缓存中读取资源，不会发请求到服务器。

当强缓存没有命中的时候，浏览器一定会发送一个请求到服务器，通过服务器端依据资源的另外一些 http header 验证这个资源是否命中协商缓存，如果协商缓存命中，服务器会将这个请求返回，但是不会返回这个资源的数据（http 响应状态为 304），而是告诉客户端可以直接从缓存中加载这个资源，于是浏览器就又会从自己的缓存中去加载这个资源。

## 强缓存
强缓存是利用 Expires 或者 Cache-Control 这两个 http response header实现的，它们都用来表示资源在客户端缓存的有效期。

Expires 是较老的强缓存管理 header，由于它是服务器返回的一个绝对时间，在服务器时间与客户端时间相差较大时，缓存管理容易出现问题。

Cache-Control 是一个相对时间的强缓存管理 header，在配置缓存的时候，以秒为单位，用数值表示，如：`Cache-Control:max-age=315360000`表示在315360000 秒内，再次请求该资源，则会启用强缓存。

这两个 header 可以只启用一个，也可以同时启用，当 response header 中，Expires 和 Cache-Control 同时存在时，Cache-Control 优先级高于 Expires。

## 协商缓存
当浏览器对某个资源的请求没有命中强缓存，就会发一个请求到服务器，验证协商缓存是否命中，如果协商缓存命中，请求响应返回的 http 状态为 304 并且会显示一个 Not Modified 的字符串。

协商缓存是利用的是【Last-Modified、If-Modified-Since】和【ETag、If-None-Match】这两对 Header 来管理的。

服务器端的响应头有 Last-Modified 字段，客户端有请求头 If-Modified-Since，值为之前 Last-Modified 的值。配置好的服务器会理解这些If-Modified-Since请求头标，将头标里的时间和文件的最后修改时间进行比较并作出响应。如果二者相等则请求响应返回的 http 状态为 304 并且会显示一个 Not Modified 的字符串。否则的话会重新发送一个新的资源和新的 Last-Modified 的头标。


服务器端的响应头有 ETag 字段，客户端有请求头 If-None-Match，值为之前 ETag 的值。原理和 Last-Modified，If-Modified-Since 类似。

## 浏览器行为对缓存的影响
* 当 ctrl + f5 强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存
* 当 f5 刷新网页时，跳过强缓存，但是会检查协商缓存
* 对于地址栏回车；页面链接跳转；新开窗口；前进后退：强缓存和协商缓存都有效

## 哪些请求不会被缓存
* HTTP 响应头中不包含 Last-Modified/Etag，也不包含 Cache-Control/Expires
* HTTP 响应头中包含 Cache-Control:no-cache，pragma:no-cache，或Cache-Control:max-age=0
* 需要根据 Cookie，认证信息等决定输入内容的动态请求
* POST 请求

## 参考
* [浏览器缓存知识小结及应用](http://www.cnblogs.com/lyzg/p/5125934.html)
* [【Web缓存机制系列】2 – Web浏览器的缓存机制](http://www.alloyteam.com/2012/03/web-cache-2-browser-cache/)

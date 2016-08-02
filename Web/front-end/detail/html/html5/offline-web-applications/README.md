# 应用缓存(Offline Web Applications)
http://www.w3school.com.cn/html5/html_5_app_cache.asp
web 应用可进行缓存一些内容。
应用程序缓存为应用带来三个优势：
    离线浏览 - 用户可在应用离线时使用它们
    速度 - 已缓存资源加载得更快
    减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源

使用
`<html>`标签中包含 manifest 属性，值为 manifest文件所在的路径

manifest文件的书写规则

manifest 文件需要配置正确的 MIME-type，即 "text/cache-manifest"。必须在 web 服务器上进行配置

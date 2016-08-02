# sql 注入

## [sqlmap](https://github.com/sqlmapproject/sqlmap)
> sqlmap 是一个开源的渗透测试工具，可以用来自动化的检测，利用SQL注入漏洞，获取数据库服务器的权限。它具有功能强大的检测引擎,针对各种不同类型数据库的渗透测试的功能选项，包括获取数据库中存储的数据，访问操作系统文件甚至可以通过外带数据连接的方式执行操作系统命令。

使用方法
```
python sqlmap.py -h
```

使用demo
```
python sqlmap.py -u "http://someurl?name=a" --eval="sessionid='56782f23-2409-44dc-a603-215b3e24a164'" -v 4
python sqlmap.py -g "inurl:"weibo.com/ .php id="
```

-v:
* 0:只显示python错误以及严重的信息。
* 1:同时显示基本信息和警告信息。（默认）
* 2:同时显示debug信息。
* 3:同时显示注入的payload。
* 4:同时显示HTTP请求。
* 5:同时显示HTTP响应头。
* 6:同时显示HTTP响应页面。

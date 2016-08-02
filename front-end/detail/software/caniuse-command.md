# CanIUse命令行工具介绍
前端开发者应该都知道 [CanIUse](http://caniuse.com/)。无意间发现有[好心人](https://github.com/sgentle)做了命令行工具。

## 安装
```
npm install -g caniuse-cmd
```
注意：如果使用的是Windows系统，需要在Git的命令行执行上述命令。否则会报`Git Not Found`的错。

## 用法
### 最基本的用法
```
caniuse  特性
``` 

如运行 `caniuse websocket`，结果如下

![caniuse websocket 运行结果](http://upload-images.jianshu.io/upload_images/16777-86835af7efda1a5c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 查看选项/帮助
```
caniuse --help
```

### 常用选项
* `-m` 显示手机浏览器的兼容情况，默认只显示PC浏览器的兼容情况
* `-p`  显示浏览器市场份额
* `-w` 打开浏览器，在 [CanIUse](http://caniuse.com/)上搜索结果
* `-c` 只显示最新浏览器的兼容情况 

更多说明见[这里](https://www.npmjs.com/package/caniuse-cmd)。
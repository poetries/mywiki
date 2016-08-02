# 事件DOMContentLoaded和load的区别
他们的区别是，触发的时机不一样，先触发DOMContentLoaded事件，后触发load事件。    

DOM文档加载的步骤为

1. 解析HTML结构。
1. 加载外部脚本和样式表文件。
1. 解析并执行脚本代码。
1. DOM树构建完成。//DOMContentLoaded
1. 加载图片等外部文件。
1. 页面加载完毕。//load

在第4步，会触发`DOMContentLoaded`事件。在第6步，触发`load`事件。    
用原生js可以这么写
```
// 不兼容老的浏览器，兼容写法见[jQuery中ready与load事件](http://www.imooc.com/code/3253)，或用jQuery
document.addEventListener("DOMContentLoaded", function() {
   // ...代码...
}, false);

window.addEventListener("load", function() {
    // ...代码...
}, false);
```

用jQuery这么写
```
// DOMContentLoaded
$(document).ready(function() {
    // ...代码...
});

//load
$(document).load(function() {
    // ...代码...
});

```



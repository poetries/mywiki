# 工作线程(web workers)
## 概述
Web Workers可以让脚本文件在浏览器创建的独立线程里运行。在脚本中，我们可以创建worker，创建worker的脚本可以和worker进行双向的通信。worker是在浏览器创建的独立线程里运行的，因此，即使在worker中运行再复杂的任务也不会冻结浏览器的用户界面。

### 使用场景
* 执行一些大计算量的操作
* 异步加载资源

### 浏览器兼容性
支持的浏览器ie10+,Firefox,Chrome。更多见[这里](http://caniuse.com/webworkers)。

### 上下文
在Worker中，其上下文是[DedicatedWorkerGlobalScope](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope)，而不是window。DedicatedWorkerGlobalScope中只支持很一小部分与DOM相关的API。DedicatedWorkerGlobalScope的所有api见[这里](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Functions_and_classes_available_to_workers)。

简单了说，就是worker不能进行DOM操作。不支持alert，console等。

如果Worker中想要操作DOM，就只能向创建Worker的脚本发个信息，让创建Worker的脚本来操作DOM。


### 其他
创建worker的页面必须是和worker文件是同域的。

web worker分为dedicated worker和shared worker。本文只介绍dedicated worker。本文中指的web worker指的是dedicated worker。对shared worker感兴趣的见[这里](http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html#sharedworker)。


## 用法
[web worker api](https://developer.mozilla.org/en-US/docs/Web/API/Worker)

### 创建worker
```
var worker = new Worker('worker.js');//必须是同域的
```

### 信息通信
主页面
```
var worker = new Worker('worker.js');
worker.postMessage(msg);//主页面向worker发消息。msg可以是对象，字符串之类。
```

worker.js
```
onmessage = function(evt) {// 处理主页面发来的消息
    postMessage('reveive data ' + evt.data + 'from page');// 向主页面发消息
}

```

### 终止Web Worker
```
worker.terminate();
```
完整demo见[这里](http://iamjoel.github.io/html5-demo/web-worker/index.html)。

更多的demo见[这里](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers#Examples)。


# 参考
* https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers
* http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html
* http://www.cnblogs.com/feng_013/archive/2011/09/20/2175007.html
* http://www.ituring.com.cn/article/841
* http://www.html5rocks.com/en/tutorials/workers/basics/
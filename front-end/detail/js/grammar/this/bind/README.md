# bind
改变函数的 this, 如
```
var dog = {name: 'wangwang'};
setTimeout(function(){
  console.log(this.name)
}.bind(dog),0);
```

## 浏览器兼容性
IE9+, Chrome, Firefox。

## 参考链接
* [搞懂JavaScript的Function.prototype.bind[译]](https://segmentfault.com/a/1190000004640916)

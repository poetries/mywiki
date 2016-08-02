# 设计模式
## 缓存
缓存一些计算的中间过程，如
```
// 不推荐
$('#btn').addClass('active');
$('#btn').show();

// 推荐
var $btn = $('#btn');
$btn.addClass('active');
$btn.show();

var arr = ['a', 'b', 'c'];
// 不推荐
for(var i = 0; i < arr.length; i++){
  //
}

// 推荐
for(var i = 0, arrLen = arr.length; i < arrLen; i++){
  //
}
```

## 装饰器模式
在程序开发过程中，通常我们并不希望某个类天生就非常庞大，一次性包含很多职责，这时候我们就可以用修饰器模式（Decorator Pattern）。修饰器模式可以动态地给某个对象添加一些额外的功能，而不会影响从这个类中派生的其他对象。

装饰器一般用来做
* 输出日志
* 对属性的说明，如 readonly,nonenumberable
* 类型检查

### 拓展阅读
* [极客学院 装饰模式](http://wiki.jikexueyuan.com/project/javascript-design-patterns/decorative-pattern.html)
* [细说ES7 JavaScript Decorators](http://greengerong.com/blog/2015/09/24/es7-javascript-decorators/)
* [ES7之Decorators实现AOP示例](http://greengerong.com/blog/2015/09/23/es7-zhi-decorators-shi-xian-aopshi-li/)
* [core-decorators.js](https://github.com/jayphelps/core-decorators.js) 实现的一些过滤器。


## 拓展阅读
* [JavaScript Patterns Collection](http://shichuan.github.io/javascript-patterns/#jquery-patterns)

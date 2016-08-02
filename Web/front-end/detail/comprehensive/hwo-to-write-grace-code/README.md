# 如何写出高质量的前端代码
## 命名
> “There are only two hard problems in Computer Science: cache invalidation and naming
things.” —Phil Karlton

## 注释

## 变量
声明变量如果不用 `var` 会导致变量成为全局变量。

## 函数
### 函数的参数数量
函数的参数不应该超过 3 个。如果函数的参数超过 3 个，应该将一些参数进行封装。

### 函数参数传递
只传函数需要的参数。如
```
// 不推荐
function greet(data){
  console.log('Hello, I am ' + data.name);
}

// 推荐
function greet(name){
  console.log('Hello, I am ' + name);
}
```

### 函数的功能
一个函数只做一件事。这有助于测试和代码复用。

### 函数要尽可能无副作用
函数尽可能无副作用。无副作用指不修改传入的参数和全局变量。

## 减少重复代码
记得在某个文章中看到说，如果重复的代码出现 3 次，就应该重构重复的代码。

## 松耦合

## KISS (Keep It Simple Stupid)
KISS =>
* 一个函数只做一件事
* 松耦合

## 缓存一些计算结果


## 避免全局变量

## 从分配置和离逻辑代码

## 不要修改不属于你的对象
不属于你的对象包括
* 浏览器原生对象，如 Object，Array等
* DOM，如 document
* BOM，如 window
* 类库对象

如果想拓展浏览器原生对象的功能，可以创建函数，函数中把浏览器原生对象传入。如 [Underscore.js](http://underscorejs.org/) 做的那样。


## 参考
* 《Clean Code(代码简洁之道)》
* 《Maintainable JavaScript(可维护的 JavaScript)》
* [Programming Principles](http://webpro.github.io/programming-principles/#kiss)

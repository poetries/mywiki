# Web存储(Web Storage)
Web存储即在客户端存储数据。

在没有Web Storage之前，是通过cookie来在客户端存储数据的。但是由于

* 浏览器能存cookie数比较少。如IE8，Firefox,opera每个域可以保存的50个cookie,Safari/WebKit没有限制。一个cookie最多可以存放4096B左右的数据（见http://www.ietf.org/rfc/rfc2965.txt）。
* 每次请求时，cookie都会存放在请求头中，传输到服务器端。但如果请求头
大小超过了限制，服务器会处理不了。

因此cookie不适合大量数据的存储。相比用Web Storage更适合存储大量数据:

* 每个域Chrome，Firefox和Opera是5M，IE是10M。 可以用这个来测 http://dev-test.nemikor.com/web-storage/support-test/ 。
* 请求时不会带web stroge的内容。

## Web Storage 提供的客户端存储数据的方法
包括localStorage和sessionStorage。他们都只能读写当前域的数据，区别是，localStorage存储的数据不会过期，sessionStorage存储的数据每次关闭浏览器后都会被清空。

ps:
* 现在很多浏览器都提供了“匿名访问”，“安全模式”，“隐身窗口”等等功能。在这种情况下，浏览器都是会重新建立一个新的localStorage，所以这些模式下的页面是没法访问在正常模式下的页面中的数据。
* 曾经，Firefox支持globalStorage：能读写所有域的存储数据的localStorage。但globalStorage没有成为标准。Firefox 13.0后被废弃了。更多见 https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage 。

## 用法
localStorage和sessionStorage的api是一样的。这里以localStorage为例

### 写
```
/*
* value会被调用 .toString方法转化成字符串。因此，如果要储存的对象，调用JSON.stringify(obj)来序列化成字符串
*/
localStorage.setItem('key', 'value');
```

### 读
```
localStorage.getItem('key');
localStorage.key(index);//localStorage数组中下标是index的key
```

### 删除
```
localStorage.removeItem('key');//删除某一个localStorage
localStorage.clear();//清空所有localStorage
```

### 遍历
```
var output = "LOCALSTORAGE DATA:\n------------------------------------\n";
if (window.localStorage) {
    if (localStorage.length) {
       for (var i = 0; i < localStorage.length; i++) {
           output += localStorage.key(i) + ': ' + localStorage.getItem(localStorage.key(i)) + '\n';
       }
    } else {
       output += 'There is no data stored for this domain.';
    }
} else {
    output += 'Your browser does not support local storage.'
}
console.log(output);
```


## 浏览器支持
IE8+,Firefox 28.0+,chrome 33.0+,Safari 7.0+。更多支持的浏览器见 http://caniuse.com/#search=Storage

## 更多
* [web sql Database](http://html5doctor.com/introducing-web-sql-databases/)
* [ie储存数据的方式：userData之类](http://msdn.microsoft.com/en-us/library/ie/ms533007%28v=vs.85%29.aspx)

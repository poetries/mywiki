# Fetch API
Fetch API提供了一个fetch()方法，它被定义在BOM的window对象中，你可以用它来发起对远程资源的请求。 该方法返回的是一个Promise对象，让你能够对请求的返回结果进行检索。

## 使用方法
### 基本使用
```
fetch(url).then(function(response) {
  return response.json();
  // 字符串 return response.text();
  // Blob 流return response.blob();
}).then(function(data) {
  console.log(data);
}).catch(function(e) {// 错误处理
  console.log("Oops, error");
});
```

### 复杂的 request
```
var req = new Request(URL, {method: 'GET', cache: 'reload'});
fetch(req).then(function(response) {
});
```

### 复杂的 response
```
fetch(url).then(function(response){
  var headers = new Headers({
    'Content-Type': 'application/json',
    'Cache-Control': 'max-age=3600'
  });
  var resData = {
    name: 'joel'
  };

  var myResponse = new Response(
      JSON.stringify(resData),
      { status: 200, headers: headers }
  );
  return myResponse.json();
}).then(function(json){
  console.log(json);
});

```

## 坑
* Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})
* 服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。


## 目前存在的缺陷
* 不能中断，没有 abort、terminate、 progress 状态、 timeout 超时处理 或 cancel 方法

## 参考
* [传统 Ajax 已死，Fetch 永生](https://github.com/camsong/blog/issues/2)
* [深入浅出Fetch API](http://wwsun.github.io/posts/fetch-api-intro.html)
* [当前端也拥有 Server 的能力](http://www.barretlee.com/blog/2016/02/16/when-fe-has-the-power-of-server/)

# ajax
## 基本用法
`$.ajax(url[,ajaxSetting])`

## ajaxSetting
* `url`
* `data`
* `type` 请求的method,包括 GET,POST,PUT,PATCH,DELETE
* `headers` 设置请求头信息
* `async` 是否用同步的方式，默认是 false
* `dataType` 对从服务器端返回来的数据按照什么格式进行解析，格式包括 xml, json, script, 或 html
* `beforeSend`  Function( jqXHR jqXHR, PlainObject settings )

### 回调
* `success`
类型: Function( PlainObject data, String textStatus, jqXHR jqXHR )
* `fail`
* `always`
* `complete`

## jqXHR
`$.ajax`的返回值    
jqXHR上的属性和方法
* readyState
* status 服务器端返回的状态码
* statusText
* readyState
* setRequestHeader(name, value)
* getAllResponseHeaders()
* getResponseHeader()
* statusCode()
* abort()


## 配置全局ajax默认值
`$.ajaxSetup(options)`    
如:
```
$.ajaxSetup({
    'headers': {
        'content-type': 'application/json'
    }
});
```
不建议

## jsonp
## promise
* done
* fail
* always

## 参考
http://api.jquery.com/jQuery.ajax/

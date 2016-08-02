# File API
读取通过文件框或拖拽的文件。    
可以读到的信息有
* name
* size
* type
* type
* lastModified 时间戳

api
* File.getAsDataURL() 经过base64编码的字符串
* File.getAsText(string encoding)

## 浏览器兼容性
IE10+支持FileReader，但不支持File。[Can I use](http://caniuse.com/#feat=fileapi)

## 拓展阅读
* [MDN File](https://developer.mozilla.org/en-US/docs/Web/API/File)

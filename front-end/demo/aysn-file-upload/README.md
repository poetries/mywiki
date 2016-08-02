# 异步文件上传文件
XMLHttpRequest1不支持异步上传文件。所以有些异步上传文件的插件采用的方式是： 构建一个表单(enctype="multipart/form-data")，并提交到iframe里的方式。

XMLHttpRequest2对异步提交表单的支持。主要是通过[FormData()](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)这个api存放表单数据，也支持放文件。如
```
$('#myForm').on('submit', function() {
	var formElem = this;
	var formData = new FormData();
	$('#myForm').find('input').each(function() {
	  if (this.type=='file' && this.files.length>0) {
	    for (var i= 0; i<this.files.length; i++) {
	      formData.append(this.name, this.files.item(i));// 存放文件数据
	    }
	  } else {
	    formData.append(this.name, this.value);
	  }
	});

	$.ajax({
	  url: formElem.action,
	  data: formData,
	  processData: false,
	  contentType: false,
	  type: formElem.method,
	  success: function(data){
	    alert(data);
	  }
	});

	return false;
});
```

## 参考
* [异步提交文件(前端栗仔)](http://blog.comiclee.com/2015/03/%E5%BC%82%E6%AD%A5%E6%8F%90%E4%BA%A4%E6%96%87%E4%BB%B6)
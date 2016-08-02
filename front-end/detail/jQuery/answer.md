# 答案
## DOM 元素与 jQuery 元素的如何互相转换
```
// DOM -> jQuery
var dom = document.getElementById('elem');
var $dom = $(dom);

// jQuery -> DOM
var $dom = $('#elem');
var dom = $dom[0];
```
* 获取选中的下拉框的文本内容
```
$( "#myselect option:selected" ).text();
```

## 给页面中所有的文本节点外面用 p 标签包裹
```
$('body').contents().filter(function(){
  return this.nodeType === 3;
}).wrap('<p></p>');
```

## $(document).ready 和 $(window).load 有何区别
DOM 加载好之后，会触发 (document).ready。

DOM 加载好，JavaScript，CSS，图片等都加载好才会触发 $(window).load。


## event.target 和 event.currentTarget 有何区别
target 为触发这事件的元素，currentTarget 为处理这事件的元素。

如
```
<div class="container">
  <span class="a">d</span>
  <span class="b">d</span>
</div>

<script>
  $('.container').click(function (event) {
    console.log(event.target, event.currentTarget);
  });
  // 点 .a： .a .container
  // 点 .b: .b .container
  // 点 .container: .container .container
</script>>
```

## mouseleave 和 mouseout 有何区别
某元素绑了 mouseout 事件，若离开其子元素也会触发 mouseout，而 mouseleave 不会。




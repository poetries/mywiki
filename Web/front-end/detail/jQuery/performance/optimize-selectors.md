# 选择器优化
随着越来越多的浏览器支持 `document.querySelectorAll()`，选择器的重担已经慢慢转移给浏览器了，但还是有一些技巧需要注意。

## 使用最新版本的jQuery
新版本会改进性能，还有很多新功能。

## 优先并尽可能地使用 ID 选择器
* 最快的选择器：id选择器和元素标签选择器
* 较慢的选择器：class选择器
* 最慢的选择器：伪类选择器和属性选择器


## 理解子元素和父元素的关系
```
$('.child', $parent)
$parent.find('.child')
$parent.children('.child')
$('#parent > .child')
$('#parent .child')
$('.child', $('#parent'))
```
以上代码，$parent.find('.child') 是最快的。

## 使用组合选择器时，尽可能使右端更明确
选元素时是从右往左处理的。
```
// 不推荐
$('div.data .gonzalez');

// 推荐
$('.data td.gonzalez');
```


## 如果需要用 jQuery 自定义的选择器
先用 CSS 定义的选择器选，再从结果集中筛选时用 jQuery 自定义的选择器。如：
```
// 不推荐
$('.form:visible');
$('.form :selected');
$('.list:eq(3)');
// 推荐
$('.form').filter(':visible');
$('.form').find(':selected');
$('.list').eq(3);
```

## 避免过度具体
```
$( ".data table.attendees td.gonzalez" );

// 在不影响结果的情况下尽量删掉中间多余部分
$( ".data td.gonzalez" );
```

## 尽量避免使用通配符
```
$('.buttons > *');        // 极慢
$('.buttons').children(); // 好多了

$('.gender :radio');      // 隐式地使用通配符，慢
$('.gender *:radio');     // 显式地使用通配符，同上，慢
$('.gender input:radio'); // 嗯，快多了
```

## 参考链接
* [Optimize Selectors](http://learn.jquery.com/performance/optimize-selectors/)
* [jQuery最佳实践](http://www.ruanyifeng.com/blog/2011/08/jquery_best_practices.html)

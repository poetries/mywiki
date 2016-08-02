# jQuery 选取元素概要
## 用选择器选取元素
```
$(选择器 [, 父元素])
```

如：
```
$('#save-btn');// 所有 id 为 save-btn 的
$('.btn', $('form'));// form 元素下类名包含 btn 的元素
$('.box h2.title'); // 所有类名包含 box 的元素下的类名包含 title 的 h2
```

jQuery 支持的选择器包括：
* CSS 1-3 定义的选择器。
* [jQuery 自定义的选择器](https://api.jquery.com/category/selectors/jquery-selector-extensions/)。

注意：
对于 jQuery 自定义的选择器，为了性能，先用 CSS 定义的选择器选，再从结果集中筛选时用 jQuery 自定义的选择器。如：
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

### 一些有用的选择器
#### 表单类
* [:checked](https://api.jquery.com/checked-selector/) 选中的单选和复选按钮
* [:selected](https://api.jquery.com/selected-selector) 选中的 `<option>` 元素
* [:disabled](https://api.jquery.com/disabled-selector) ji用的表单元素

#### 是否可见
* [:visible](https://api.jquery.com/visible-selector/) 可见元素
* [:hidden](https://api.jquery.com/hidden-selector/) 不可见元素

#### 内容过滤
* [:contains(文本)](https://api.jquery.com/contains-selector) 如： `$("div:contains('John')")`
* [:empty](https://api.jquery.com/empty-selector/) 没有子元素或没有文本内容的元素
* [:has(选择器)](https://api.jquery.com/has-selector/) 有指定子元素的元素

#### 其他
* [:not(选择器)](https://api.jquery.com/not-selector/) 不满足指定选择器的元素
* [:animated](https://api.jquery.com/animated-selector/) 正在做动画的元素
* [:eq(下标值)](https://api.jquery.com/eq-selector/) 在兄弟节点中的位置等于下标值的的元素。下标从 0 开始。
* [:gt(下标值)](https://api.jquery.com/gt-selector/) 在兄弟节点中的位置大于下标值的的元素。下标从 0 开始。
* [:lt(下标值)](https://api.jquery.com/lt-selector/) 与 :gt 相反。

### 选择器中包含元字符的处理
选择器的元字符有：`!"#$%&'()*+,./:;<=>?@[\]^{|}~`。

选择器中如果要使用选择器的元字符，必须用 \ 来转义。如：选择 id 为 foo.bar 的元素，要使用 `$("#foo\\.bar")`。如果使用 `$("#foo.bar")`，则选择的是 id 为 foo 并且有 bar 的类名的元素。

## 从层级中选取元素
### 从父元素和祖系元素中找
* [.closest([选择器])](https://api.jquery.com/closest)
* [.parent([选择器])](https://api.jquery.com/parent)
* [.parents([选择器])](https://api.jquery.com/parents)
* [.offsetParent()](https://api.jquery.com/offsetParent) 找最近的父级定位元素（position 不为 static 的元素）

### 从子元素中下找
* [.find([选择器])](https://api.jquery.com/find/)
* [.children([选择器])](https://api.jquery.com/children/)
* [.contents()](https://api.jquery.com/contents/) 元素下的内容：包括文本节点和注释节点。常常也用来做选取 iframe 的内容，如
```
$('#frameDemo').contents().find('a');
// 等效与
$('#frameDemo')[0].contentWindow.$('a');
```

### 从兄弟元素中找
* [.siblings(选择器)](https://api.jquery.com/siblings/)
* [.prev()](https://api.jquery.com/prev)
* [.prevAll()](https://api.jquery.com/prevAll)
* [.next()](https://api.jquery.com/next)
* [.nextAll()](https://api.jquery.com/nextAll)


## 过滤掉不满足条件的元素
* [.filter(选择器|函数)](https://api.jquery.com/filter) 如:
```
$(".btn")
  .filter(function(index) {
    return index > 2 && $(this).is(':visible');
});
```

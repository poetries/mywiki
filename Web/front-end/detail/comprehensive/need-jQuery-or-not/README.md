# 我们到底需不需要 jQuery
曾经，在那个 IE6 还是主流浏览器的时代，为了实现稍微复杂一点的功能，也需要很多代码。如果要做到兼容主流浏览器，更需大费周章。当 jQuery 出现后，使用 jQuery 实现同样的功能，我们只需写很少的代码，并且兼容主流浏览器。于是，大部分网站都会使用 jQuery。

时过境迁，我们到底需不需要 jQuery 呢?

**认为不需要 jQuery 的理由如下：**
* IE7 及更低版本的浏览器的市场份额已经低到忽略的地步。而用 IE8 及更高版本的浏览器的原生 API 来实现 jQuery 提供的功能并不是很麻烦。比如：

```
/* 选取元素 */
// IE8+
document.querySelectorAll(选择器);

// jQuery
$(选择器);


/* Ajax */
// IE8+
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onreadystatechange = function() {
  if (this.readyState === 4) {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var resp = this.responseText;
    } else {
      // Error :(
    }
  }
};

request.send();
request = null;

// jQuery
$.ajax({
  type: 'GET',
  url: '/my/url',
  success: function(resp) {

  },
  error: function() {

  }
});


/* 绑定事件 */
// IE8+
function addEventListener(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
  } else {
    el.attachEvent('on' + eventName, function(){
      handler.call(el);
    });
  }
}

addEventListener(el, eventName, handler);

// jQuery
$(el).on(eventName, eventHandler);

```
* 用 jQuery 做页面的交互的做法是，当数据改变时，选择数据对应的 DOM，然后修改 DOM。如果 HTML 发生改变，如某元素的 id 改了， 而 jQuery 是通过 id 来找那元素的，那 jQuery 的代码也需要修改。而且，如果页面的数据与 DOM 的交互很复杂，用 jQuery 还满麻烦的。在这些情况下，用 MVVM 的框架是个不错的选择： MVVM 做页面的交互的做法是，在 HTML 中，设置好了 DOM 与数据的关系。当数据改变时，框架会更新 DOM。

**认为需要 jQuery 的理由如下**
* jQuery 的有丰富的插件库。
* 不少现代的框架依赖 jQuery，如 Bootstrap 的 JS 插件，Ember，Meteor JS。如果要用那些框架，就不得不用 jQuery。
* 用 jQuery 比用原生的 API 好学，好用，强大，简洁， 还不需要考虑浏览器兼容性问题。
*  jQuery 的开发仍在继续中。并且与时俱进的增加了一些新特性。比如，jQuery 3 增加允许用 `for... of` 来遍历 jQuery 集合的 DOM 元素。如

```
var $inputs = $('input');
var i = 0;

for(var input of $inputs) {
   input.id = 'input-' + i++;
}
```

那么，我们到底需不需要 jQuery 呢? 其实还是要根据具体项目来定。对我来说，对于一般的项目，我都会用 jQuery，毕竟 jQuery 大小不大，比如，`jquery-3.0.0-beta1.min.js` 在没 gzip 压缩前也就 86 KB。


## 参考链接
* [YOU MIGHT NOT NEED JQUERY](http://youmightnotneedjquery.com/)
* [Why jQuery is still relevant](https://medium.com/developers-writing/why-jquery-is-still-relevant-6fcb258177cb#.oe67z5yrs)
* [Choosing Vanilla JavaScript in 2016](https://medium.com/vanilla-javascript/choosing-vanilla-javascript-in-2016-6f38a8302ee5#.myl43zbxc)
* [jQuery 3 中的新变动](http://wiki.jikexueyuan.com/project/geekdigest/what-is-new-in-jquery.html)

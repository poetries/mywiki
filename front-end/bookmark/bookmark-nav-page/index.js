ready(function() {
  var avaliableShortcut = '1234567890abcdeghijklmnopqrstuvwxyz'.split(''); //里面是没有f的，f用来做搜索
  var shortcuts = {};

  var linkItemEls = document.querySelectorAll('.nav__item>a');
  Array.prototype.forEach.call(linkItemEls, function(item, i) {
    var key = item.getAttribute('data-shortcut');
    if (!key) {
      key = item.textContent.substr(0, 1); // 默认是文字内容的第一个字母
    } else {
      if (!/^[0-9a-zA-Z]$/.test(key)) {
        console.error('error shortcut %s', key);
        return;
      }
    }
    key = typeof key === 'string' ? key.toLowerCase() : key;
    avaliableShortcut = removeFromArray(avaliableShortcut, key);
    if (!shortcuts[key]) {
      shortcuts[key] = item.getAttribute('href');

    } else {
      debugger;
      console.error('repeat short cut %s', key);
    }
  });


  console.log('可用的快捷键 %s', avaliableShortcut.join());

  // 快捷键打开链接
  document.addEventListener('keyup', function(evt) {
    var key = String.fromCharCode(evt.which).toLocaleLowerCase();
    if (shortcuts[key]) {
      window.open(shortcuts[key], '_blank');
    }
  });

  function removeFromArray(arr, value) {
    return arr.filter(function (each) {
      return each != value;
    });
  }


  function AutoComplate() {
    var self = this;
    this.el = document.querySelector('.auto-complate');
    this.input = this.el.querySelector('.auto-complate__input');
    this.alllinks = Array.prototype.filter.call(document.querySelectorAll('a'), function(link, i) {
      var href = link.getAttribute('href');
      return href !== '' && href !== '###' && !/^javascript/.test(href) && link.className.indexOf('.ignore-search') === -1;
    });

    this.itemTemplate = document.querySelector('.auto-complate-template').innerHTML;
    this.resWrap = this.el.querySelector('.auto-complate__content');


    document.addEventListener('keyup', function(evt) {
      var code = evt.which;
      var key = String.fromCharCode(code).toLocaleLowerCase();
      if (getComputedStyle(self.el).display === 'none') {
        if (key === 'f') { //f   // && evt.shiftKey
          self.show();
        }
        return;
      }
      if (evt.which === 27) { // ese健
        self.hide();
      } else if (code === 38) { //向上
        self._selectMove('prev');
      } else if (code === 40) { //向下
        self._selectMove('next');
      } else if (evt.which === 13) { // 回车
        var selectItem = document.querySelector('.auto-complate__item--selected');
        if (selectItem) {
          window.open(selectItem.querySelector('a').getAttribute('href'), '_blank');
        }
      }
    });

    document.addEventListener('click', function(evt) {
      if (!isChild(self.el, evt.target)) {
        self.hide();
      }
    });

    function isChild(parent, child) {
      var res = false;
      if (parent === child) {
        return true;
      }
      var children = parent.children;
      if (children.length > 1) {
        res = Array.prototype.some.call(children, function(el) {
          return isChild(el, child);
        })
      } else if (children.length === 1) {
        return children[0] === child;
      }
      return res;
    }


    this.input.addEventListener('keyup', function(evt) {
      evt.stopPropagation();
      if (getComputedStyle(self.el).display === 'none') {
        return;
      }
      var code = evt.which;
      var key = String.fromCharCode(code).toLocaleLowerCase();
      if (evt.which === 27) { // ese健
        self.hide();
      } else if (evt.which === 13) { // 回车
        var selectItem = document.querySelector('.auto-complate__item--selected');
        if (selectItem) {
          window.open(selectItem.querySelector('a').getAttribute('href'), '_blank');
        }
      } else if (code === 38) { //向上
        // this.blur();
        self._selectMove('prev');
      } else if (code === 40) { //向下
        // this.blur();
        self._selectMove('next');
      } else {
        var matchStr = this.value.trim();
        if (matchStr !== '') {
          self.match(self.input.value);
        } else {
          self.resWrap.innerHTML = '';
        }
      }
      this.value = this.value;// 让光标始终定位在输入框最后
    });
  }
  AutoComplate.prototype = {
    show: function() {
      this.el.style.display = 'block';
      this.input.focus();
    },
    hide: function() {
      this.el.style.display = 'none';
      this.input.value = '';
      this.resWrap.innerHTML = '';
    },
    match: function(matchStr) {
      var matchArr = [];
      Array.prototype.forEach.call(this.alllinks, function(link) {
        var name = link.textContent;
        var href = link.getAttribute('href');
        if (name.toLowerCase().indexOf((matchStr + '').toLowerCase()) > -1 || href.toLowerCase().indexOf((matchStr + '').toLowerCase()) > -1) {
          matchArr.push({
            name: name,
            href: href,
            matchStr: matchStr
          });
        }
      })
      this._makeAutoComplate(matchArr);
    },
    _makeAutoComplate: function(matchArr) {
      var self = this;
      var html = [];
      matchArr.forEach(function(each) {
        html.push(self._makeItem(each.name, each.href, each.matchStr));
      });
      this.resWrap.innerHTML = html.join('');
      var firstItem = document.querySelectorAll('.auto-complate__item')[0];
      if (firstItem) {
        firstItem.className = firstItem.className + ' auto-complate__item--selected';
      }
    },
    _makeItem: function(name, href, matchStr) {
      var html = this.itemTemplate;
      var reg = new RegExp(matchStr, 'ig');
      var name = name.replace(reg, function(matched) {
        return '<span class="auto-complate__match-str">' + matched + '</span>'
      });
      var hrefText = href.replace(reg, function(matched) {
        return '<span class="auto-complate__match-str">' + matched + '</span>'
      });
      html = html.replace('{name}', name);
      html = html.replace('{hrefText}', hrefText);
      html = html.replace('{href}', href);
      return html;
    },
    _selectMove: function(dir) {
      var selectItem = document.querySelector('.auto-complate__item--selected');
      var tar;
      if (dir === 'prev') {
        tar = selectItem.previousElementSibling;
      } else if (dir === 'next') {
        tar = selectItem.nextElementSibling;
      }
      if (tar) {
        selectItem.className = selectItem.className.replace('auto-complate__item--selected', '');
        tar.className = tar.className.className + ' auto-complate__item--selected';
      }

    }
  };


  var autoComplate = new AutoComplate();
});


function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

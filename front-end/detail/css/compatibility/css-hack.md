# css hack
有时，我们为了让一些外观在不同浏览器中做保持一致。就不得不用`css hack`。下面是常用的`css hack`。

## 添加标识浏览器的类名
做法是，用js来识别浏览器，然后在文档根节点添加类名。css类似这样写
```
.ie .sth{} /* 对IE做些处理 */
.firefox .sth{} /* 对火狐做些处理 */
.weblit .sth{} /* 对webkit做些处理 */
```
实现见https://github.com/rafaelp/css_browser_selector

## 条件注释
条件注释的内容只会在符合条件的浏览器中显示。条件注释只在IE5到IE9（包含）中工作。所以，如果要专门为ie加样式或脚本，可以用条件注释。

常见的条件注释如下
```html
<!--[if IE6]>
IE6版本有效
<![endif]-->
<!--[if gt IE6]>
IE6以上版本有效
<![endif]-->
<!--[if gte IE6]>
IE6（包含）及以上版本有效
<![endif]-->
<!--[if lt IE8]>
IE8以下版本有效
<![endif]-->
<!--[if lte IE8]>
IE8（包含）及以下版本有效
<![endif]-->
<!--[if (gt IE 5)&(lt IE 7)]>
IE5 - IE7版本有效
<![endif]-->
<!--[if (IE 5)|(IE 6)]>
IE5或IE6版本有效
<![endif]-->
<!--[if !IE]>-->
除了IE
<![endif]-->
```

## 选择器hack
针对某个选择器做hack。
```css
/*IE6-*/
*html#idname{color:red;}

/*IE7*/
*:first-child+html#dos{color:red}

/*IE7,FF,Saf,Opera*/
html>body#tres{color:red}

/*IE8,FF,Saf,Opera*/
html>/**/body#cuatro{color:red}

/*除了IE6-8*/
:root*>#quince{color:red}

/*IE10+*/
@mediascreenand(-ms-high-contrast:active),(-ms-high-contrast:none){
#veintiun{color:red;}
}

```

## 属性hack
针对某个选择器做hack。
``` css
_color:red;/*IE6支持*/
*color:red;/*IE6、IE7支持*/
+color:red;/*IE7支持*/
*+color:red;/*IE7支持*/
color:red\9;/*IE6、IE7、IE8、IE9支持*/
color:red\0;/*IE8、IE9支持*/
color:red\9\0;/*IE9支持*/
@mediascreenand(min-width:0\0){/*IE9,IE10支持*/
#veintidos{color:red}
}
```


## 参考
https://github.com/logeshpaul/CSS-Hacks
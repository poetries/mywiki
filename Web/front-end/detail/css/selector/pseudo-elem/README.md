# CSS 伪元素介绍
## 什么是伪元素
伪元素表示了某个元素的子元素。这个子元素虽然在逻辑上存在，但却并不实际存在于文档树中。

因为伪元素并不在文档树中，所以通过JS，也抓取不到伪元素，也不能给它绑事件。

## 语法
伪元素以`::`开头。

在CSS1和CSS2中，伪元素和伪类一样，都是用`:`开头。但在CSS3中，伪元素以`::`开头，用以和伪类进行区分。 

IE8不支持`::`。因此如果要兼容IE8，只能用`:`。

## 常见的伪元素
### ::before
在当前元素的内容的前面插入一个子元素。插入的元素为内联元素。

需要注意的是，使用::before时， 必须使用`content`来指定子元素的内容。
例如：
```
.element::before {
    content: "Note: "; /* 字符串 */
}

.element::before {
    content: attr(title); /* 元素的title属性 */
}

.element::before {
    content: url(path/to/image.png); /* 一个图片 */
}

.element::before {
    content: "\201C"; /* Unicode转义的一个字符 */
}
```

 更详细的介绍见[这里](http://tympanus.net/codrops/css_reference/before/)

### ::after
在当前元素的内容的后面插入一个子元素。
其他和 ::before类似。

### ::first-line
选择当前元素的第一行。
需要注意的是，其只作用于块级元素[注1]。

对::first-line只能使用下面的样式
* Font: font, font-style, font-variant, font-weight, font-size, line-height和font-family.
* Background: background, background-color, background-image, background-position, background-repeat, background-size和background-attachment
* text-decoration, text-transform, letter-spacing和word-spacing

因此，对::first-line使用margin和padding是无效的。

更详细的介绍见[这里](http://tympanus.net/codrops/css_reference/first-line/)。

### ::first-letter
 选择第一个字母。
更详细的介绍见[这里](http://tympanus.net/codrops/css_reference/first-letter/)。

### ::selection
选中当前元素中，选中的文字。
![selection.png](http://upload-images.jianshu.io/upload_images/16777-5d6a7caef0e351c4.png)

对::selection的只能使用 color, background-color和text-shadow这几个属性。

## 什么时候用伪元素
HTML 标签的目的，就是为了展示内容信息。非内容信息要使用伪元素。

具体的使用场景是图标和清除浮动。

所谓的非内容信息，指的是一些对内容进行修饰的信息。

如下图，登录按钮左边的图标是对登录的说明，为非内容信息。
![登录按钮.png](http://upload-images.jianshu.io/upload_images/16777-d8da6fa57a243440.png)


如下图，用红框框起来的小图标表示，点击左边的链接，会在新窗口打开。也是非内容信息。
![外链.png](http://upload-images.jianshu.io/upload_images/16777-838ab846f3288b78.png)



## demos
* [那些 CSS 偽元素可以幫你做的 10 個效果](http://blog.mukispace.com/pseudo-elements-10-examples/)
* [基于单个 div 的 CSS 绘图](http://justjavac.com/html5/2014/10/10/single-div-drawings-with-css.html)

## 注
1. 块级元素指display的值为block, inline-block, table-cell, table-caption或 list-item中的一个的。
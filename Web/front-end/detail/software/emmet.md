# 前端开发利器：Emmet 介绍
[Emmet](http://emmet.io/) 是一个能提高前端开发效率的编辑器插件，支持 Sublime，Atom，TextMate，Nodepad++ 等主流编辑器。Emmet 定义了一些缩写，当我们输入缩写代码后，按展开键（默认是 Tab 键）后会展开成完整的代码。如，我们在 HTML 文件中输入 `ul.list>li{第$个}*2` ， 然后按展开键，会展开成如下代码
```
<ul class="list">
  <li>第1个</li>
  <li>第2个</li>
</ul>
```

在 CSS 文件中输入 `posa` 会展开成
```
position: absolute;
```

是不是很方便~

Emmet 的 HTML 缩写支持 CSS 选择器风格的写法。如我们要写一个 id 为 box， 类名为 news-box 的div，div 下面有 a元素，其 href 为 xxx 。只需这么写 `div#box.news-box>a[href=xxx]` ，和 CSS 选择器的写法完全一致。

下面就介绍下 Emmet 提供的一些常用的缩写。

## HTML 简写
`html:5` 展开为
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Document</title>
</head>
<body>

</body>
</html>
```

`link:css` 展开为
```
<link rel="stylesheet" href="style.css">
```

`btn` 展开为
```
<button></button>
```

`select+` 展开为
```
<select name="" id="">
  <option value=""></option>
</select>
```

`ul+` 展开为
```
<ul>
  <li></li>
</ul>
```

`ol+` 展开为
```
<ol>
  <li></li>
</ol>
```

`dl+` 展开为
```
<dl>
  <dt></dt>
  <dd></dd>
</dl>
```

`table+` 展开为
```
<table>
  <tr>
    <td></td>
  </tr>
</table>
```

`tr+` 展开为
```
<tr>
  <td></td>
</tr>
```


`cc:ie6` 展开为
```
<!--[if lte IE 6]>

<![endif]-->
```

`cc:ie` 展开为
```
<!--[if IE]>

<![endif]-->
```

`cc:noie` 展开为
```
<!--[if !IE]><!-->

<!--<![endif]-->
```

## CSS 缩写
### 盒模型相关
* `d` 展开为 `display: block;`
* `d:n` 展开为 `display:none;`
* `d:f` 展开为 `display:flex;`
* `d:i` 展开为 `display:inline;`
* `d:ib` 展开为 `display: inline-block;`
* `fl` 展开为 `float: left;`
* `fl:r` 展开为 `float: right;`
* `fl:n` 展开为 `float: none;`
* `pos` 展开为 `position:relative;`
* `pos:a` 展开为 `position: absolute;`
* `pos:f` 展开为 `position:fixed;`
* `m` 展开为 `margin: ;`
* `m:a` 展开为 `margin: auto;`
* `mt` 展开为  `margin-top: ;` 类型的还有 mt,mb,mr
* `p` 展开为 `padding: ;` 其他和margin类型
* `bxz` 展开为 `box-sizing: border-box;`

### 字体相关
* `f` 展开为 `font: ;`
* `fz` 展开为 `font-size: ;`
* `ff` 展开为 `font-family: ;`
* `fs` 展开为 `font-style: italic;`

## 文本相关
* `va` 展开为 `vertical-align: top;`
* `va:m` 展开为 `vertical-align: middle;`
* `ta` 展开为 `text-align: left;`
* `ta:c` 展开为 `text-align: center;`
* `td:n` 展开为 `text-decoration: none;`
* `wos` 展开为 `word-spacing: ;`
* `c` 展开为 `color: #000;`
* `c:r` 展开为 `color: rgb(0, 0, 0);`
* `c:ra` 展开为 `color: rgba(0, 0, 0, .5);`
* `op` 展开为 `opacity: ;`
* `op+` 展开为
```
opacity: ;
filter: alpha(opacity=);
```

## 背景
* `bg` 展开为 `background: #000;`
* `bg+` 展开为 `background: #fff url() 0 0 no-repeat;`
* `bgc` 展开为 `background-color: #fff;`
* `bgi` 展开为 `background-image: url();`
* `bgr` 展开为 `background-repeat: ;`
* `bgp` 展开为 `background-position: 0 0;`
* `bgsz` 展开为 `background-size: ;`

## 边框和轮廓
* `bd` 展开为 `border: ;`
* `bd+` 展开为 `border: 1px solid #000;`
* `bd:n` 展开为 `border: none;`
* `bdl` 展开为 `border-left: ;`
* `bdl+` 展开为 `border-left: 1px solid #000;`
* `bdrs` 展开为 `border-radius: ;`
* `bdc:t` 展开为 `border-color: transparent;`
* `ol` 展开为 `outline: ;`

## 列表
* `lis` 展开为 `list-style: ;`
* `lst` 展开为 `list-style-type: ;`
* `list:n` 展开为 `list-style-type:none;`

# 其他
* `!` 展开为 `!important`
* `anim` 展开为 `animation: ;`
* `anim-` 展开为 `animation:name duration timing-function delay iteration-count direction fill-mode;`
* `trf` 展开为 `transform: ;`
* `trf:r` 展开为 `transform: rotate(angle);`
* `trf:rx` 展开为 `transform: rotateX(angle);`
* `trf:sc` 展开为 `transform: scale(x, y);`
* `trf:t` 展开为 `transform: translate(x, y);`
* `trf:t3` 展开为 `transform: translate3d(tx, ty, tz);`
* `trs` 展开为 `transition: prop time;`
* `us` 展开为 `user-select: none;`

`@m` 展开为
```
@media screen {
}
```

`@kf` 展开为
```
@keyframes identifier {
  from {  }
  to {  }
}
```

以上缩写展开时，都会一起生成带浏览器前缀（vendor-prefixed）的。

## Emmet 的命令
* [展开缩写](http://docs.emmet.io/actions/expand-abbreviation/) `Tab`
* [每按一下，扩大选择范围：选择当前元素及其父级元素](http://docs.emmet.io/actions/match-pair/)  `⌃D` / `Ctrl+,`
* [每按一下，缩小选择范围：选择当前元素的第一个字元素](http://docs.emmet.io/actions/match-pair/)  `⌃J` / `Shift+Ctrl+0`
* [光标移动移动至匹配的标签，多次按时在标签内容的结尾和标签的头部位置切换](http://docs.emmet.io/actions/go-to-pair/) – `⇧⌃T` / `Ctrl+Alt+J`
* [用简写来包裹选中内容](http://docs.emmet.io/actions/wrap-with-abbreviation/) — `⌃W` / `Shift+Ctrl+G`
* [光标到下一个编辑点。编辑点指的是，没有内容元素内部](http://docs.emmet.io/actions/go-to-edit-point/) — `Ctrl+Alt+→` 或 `Ctrl+Alt+←`
* [选择元素。多次按会在元素，元素属性，元素属性值之间切换](http://docs.emmet.io/actions/select-item/) – `⇧⌘.` 或 `⇧⌘,` / `Shift+Ctrl+.` 或 `Shift+Ctrl+,`
* [删除标签，但不包括其innerHTML的内容](http://docs.emmet.io/actions/remove-tag/) – `⌘'` / `Shift+Ctrl+;`
* [数学表达式求值。如：3+2 求值 5](http://docs.emmet.io/actions/evaluate-math/) — `⇧⌘Y` / `Shift+Ctrl+Y`
* [重构CSS3带浏览器前缀（vendor-prefixed）的值](http://docs.emmet.io/actions/reflect-css-value/) – `⇧⌘R` / `Shift+Ctrl+R`
* 修改标签的名称 – `⇧⌘K` / `Shift+Ctrl+'`

## [增减数值类别](http://docs.emmet.io/actions/inc-dec-number/)
* 增加1: `Ctrl+↑` 这个与Mac的按键冲突，需要修改快捷键
* 减少1: `Ctrl+↓`
* 增加0.1: `Alt+↑`
* 减少0.1: `Alt+↓`
* 增加10: `⌥⌘↑` / `Shift+Alt+↑`
* 减少10: `⌥⌘↓` / `Shift+Alt+↓`
*  ⌃W / Shift+Ctrl+G

注：`/` 左边是Mac的快捷键，右边是Windows的快捷键

## 浏览器前缀补全
`-浏览器前缀-属性名`
其中浏览器前缀包括
* w: webkit
* m: moz
* s: ms
* o: o

例如： 输入 `-wm-somepop` + `Tab` 展开为

```
-webkit-somepop: ;
-moz-somepop: ;
somepop: ;
```

## 渐变（Gradients）
`lg(属性)`
如 `bg:lg(to right, #f60,#f00);` + `Tab` 展开为
```
background:-webkit-linear-gradient(left, #f60, #f00);
background:-o-linear-gradient(left, #f60, #f00);
background:linear-gradient(to right, #f60, #f00);
```

## 附：Mac上图标与按键的对应
* `⌘` Command 键
* `⌃` Control 键
* `⌥` Option 键
* `⇧` Shift 键
* `⇪` Caps Lock
* fn  功能键

想了解更多见 Emmet 文档中心 ->  http://docs.emmet.io/   。
所有的快捷键 -> http://docs.emmet.io/cheat-sheet/ 。

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**

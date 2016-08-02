# 列表样式规则
列表样式规则只对li元素和 display 为 list-item 的元素生效

## list-style-type
设置列表项标记的类型。常用的值
* none 无
* disc	默认。标记是实心圆。
* circle	标记是空心圆。
* square	标记是实心方块。
* decimal	标记是数字
* lower-roman	小写罗马数字(i, ii, iii, iv, v, 等。)
* upper-roman	大写罗马数字(I, II, III, IV, V, 等。)
* lower-alpha	小写英文字母The marker is lower-alpha (a, b, c, d, e, 等。)
* upper-alpha	大写英文字母The marker is upper-alpha (A, B, C, D, E, 等。)

更多值见[这里](http://www.w3school.com.cn/cssref/pr_list-style-position.asp)

## list-style-position
设置在何处放置列表项标记。可选值
* inside	列表项目标记放置在文本以内，且环绕文本根据标记对齐。
* outside	默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐。
* inherit

## list-style-image
使用图像来替换列表项的标记。可选值
* URL	图像的路径。
* none	默认。无图形被显示。

如
```
list-style-image:url("/i/arrow.gif");

```

## list-style
设置所有的列表属性。如
```
ul
{
  list-style:square inside url('/i/arrow.gif');
}
```
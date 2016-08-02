# 文本域的 disabled, readonly
## disabled
```
<input disabled type="text">
```
带 disabled 属性的文本域的在表单提交时，是不会提交的。

## readonly
```
<input readonly type="text">
```
带 readonly 属性的文本域的值不可编辑。在手机浏览器中，带 readonly 属性的文本域获得焦点时不会弹出软键盘。如果用第三方日期插件，就需要将文本域设置成 readonly，否则会出现键盘挡住日历的情况。

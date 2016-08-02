# 表格样式规则
demo见[这里](demo/index.html)

## border-collapse
设置是否将表格边框折叠为单一边框。可选值
* separate 默认值。 table、th 以及 td 元素都有独立的边框
* collapse 表格边框折叠为单一边框

## border-spacing
设置相邻单元格的边框间的距离。仅在`border-collapse:separate;`时生效。可选值
* length length 使用 px、cm 等单位。不允许使用负值。如果定义一个 length 参数，那么定义的是水平和垂直间距;如果定义两个 length 参数，那么第一个设置水平间距，而第二个设置垂直间距。

如
```
border-collapse:separate;
border-spacing:10px 50px;
```
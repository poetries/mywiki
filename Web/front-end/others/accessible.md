# 网页无障碍
## 关于ARIA
Accessible Rich Internet Applications 简称 ARIA。    
ARIA 是一个通过给自定义元素添加一些语义化的说明，来提高残障人士对页面的可访问性的W3C规范。    
比如,我们用ul和li来自定义了一个select下拉框。如何让盲人用户知道我们使用li标签是用来模拟标准select控件呢？根据规范，我们可以给ul加`role="listbox"`来标识，这是个下拉框。

## ARIA的常用属性
### ARIA  role属性
ARIA role已分abstract role、widget role和landmark role三类。


#### widget role
其如下可选值
* spinbutton  表示可微调，可上下调整数值范围
* slider 表示滑动条
* progressbar 表示进度条
* button 表示按钮
* radio 表示单选框，自定义时可使用
* textbox 表示输入框，自定义时可使用
* checkbox 表示复选框，自定义时可使用
* dialog 表示对话框（弹出层）
* alertdialog 表示警示对话框
* tooltip 表示提示文本
* menu 表示菜单
	* menuitem 菜单项
	* menuitemcheckbox 可复选的菜单项
	* menuitemradio 只要单选的菜单项
* combobox 表示下拉列表框
* grid 表示网格（表格）
* listbox 表示选择列表
* menubar 表示菜单栏
* radiogroup 表示一组单选组合
* tablist 表示标签列表
	* tab 标签选项
	* tabpanel 标签面板
* tree & treegrid 表示树结构
* toolbar 表示工具栏

例如我们自定义一个弹出框
```
<div role="alertdialog" aria-labelledby="hd" aria-describedby="msg">
    <form>
    <fieldset>
        <legend id="hd">Confirm Action</legend>
        <p id="msg">Are you sure you want to submit this form?</p>
        <input type="button" id="ok-button" value="OK">
        <input type="button" id="cancel-button" value="Cancel">
    </fieldset>
    </form>
</div>
```

### ARIA labels
* `aria-label` 为组件指定内置的文本标签，不在视觉上呈现
* `aria-labelledby` 当想要的标签文本已在其他元素中存在时，可以将其值为该元素的id

### 状态类
* `aria-expanded="true"` 展开状态
* `aria-invalid="true"` 放在表单元素上，标识输入是否是合法的

### 能力类
* `aria-multiselectable="true"` 可多选
* `aria-haspopup` 有弹出菜单

## 参考
* [ARIA让视障人士更了解你的页面](http://tid.tenpay.com/?p=5150)
* http://www.w3.org/TR/wai-aria/complete

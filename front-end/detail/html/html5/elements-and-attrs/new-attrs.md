# 新增的属性
## 表单相关的属性
* 对input（type=text）、select、textarea与button指定autofocus属性。它以指定属性的方式让元素在画面打开时自动获得焦点。
* 对input（type=text）、textarea指定placeholder属性，它会对用户的输入进行提示，提示用户可以输入的内容。
* 对input、output、select、textarea、button与fieldset指定form属性。它声明属于哪个表单（通过form属性的值与form的id值一致来指定），然后将其放置在页面的任何位置，而不是表单之内。
* 对input（type=text）、textarea指定required属性。该属性表示用户提交时进行检查，检查该元素内必定要有输入内容。
* 为input标签增加几个新的属性：autocomplete、min、max、multiple、pattern与step。
	* list,autocomplete属性与datalist元素配合使用
	* multiple属性允许上传时一次上传多个文件
	* pattern属性用于验证输入字段的模式，其实就是正则表达式
	* step, min, max 属性与数字输入框一起使用(type=number)。step规定输入字段的合法数字间隔（如 step="3"，则合法数字应该是 -3、0、3、6，以此类推），step 属性可以与 max 以及 min 属性配合使用，以创建合法值的范围。
* 为input、button元素增加formaction、formenctype、formmethod、formnovalidate与formtarget属性。用户重载form元素的action、enctype、method、novalidate与target属性。为fieldset元素增加disabled属性，可以把它的子元素设为disabled状态。
* 为input、button、form增加novalidate属性，可以取消提交时进行的有关检查，表单可以被无条件地提交。

## 链接相关属性
* 为a、area增加media属性。规定目标 URL 是为什么类型的媒介/设备进行优化的。该属性用于规定目标 URL 是为特殊设备（比如 iPhone）、语音或打印媒介设计的。该属性可接受多个值。只能在 href 属性存在时使用。
* 为area增加herflang和rel属性。hreflang 属性规定在被链接文档中的文本的语言。只有当设置了 href 属性时，才能使用该属性。注释：该属性是纯咨询性的。rel 属性规定当前文档与被链接文档/资源之间的关系。只有当使用 href 属性时，才能使用 rel 属性。
* 为link增加size属性。sizes 属性规定被链接资源的尺寸。只有当被链接资源是图标时 (rel="icon")，才能使用该属性。该属性可接受多个值。值由空格分隔。
    为base元素增加target属性，主要是保持与a元素的一致性。

## 其他属性
* 为ol增加reversed属性，它指定列表倒序显示。
* 为meta增加charset属性。 `<meta charset=”utf-8″ />`
* 为menu增加type和label属性。label为菜单定义一个课件的标注，type属性让才当可以以上下文菜单、工具条与列表cande但三种形式出现。
* 为style增加scoped属性。它允许我们为文档的指定部分定义样式，而不是整个文档。如果使用 "scoped" 属性，那么所规定的样式只能应用到 style 元素的父元素及其子元素。
* 为script增减属性，它定义脚本是否异步执行。async 属性仅适用于外部脚本（只有在使用 src 属性时）有多种执行外部脚本的方法：
    * 如果 async="async"：脚本相对于页面的其余部分异步地执行（当页面继续进行解析时，脚本将被执行）
    * 如果不使用 async 且 defer="defer"：脚本将在页面完成解析时执行
    如果既不使用 async 也不使用 defer：在浏览器继续解析页面之前，立即读取并执行脚本
* 为html元素增加manifest，开发离线web应用程序时他与API结合使用，定义一个URL，在这个URL上描述文档的缓存信息。
* 为iframe增加撒个属性，sandbox、seamless、srcdoc。用来提高页面安全性，防止不信任的web页面执行某些操作。

## 参考
http://www.cnblogs.com/mzwhj/archive/2013/02/19/2917779.html



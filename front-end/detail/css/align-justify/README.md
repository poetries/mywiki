# 元素两端对齐 [demo](http://htmlpreview.github.io/?https://github.com/iamjoel/front-end-note/blob/master/detail/css/align-justify/demo.html)
如果让文本两端对齐只需设置`text-align: justify;`。
如果是要让`display:inline-block;`的元素两端对其需要
* 容器设置 `text-align: justify;`
* 容器设置
```
容器设置选择器:after {
        content: '';
        display: inline-block;
        width: 100%;
 }
 ```

注意：如果元素之间没有空格(用js动态生成的)，则不会生效。

# 新手常见问题及解答
## 目录
* [在浏览器中显示中文为乱码](#error-code)
* [windowsXP/win7/win8怎样创建新文件默认编码格式为UTF-8](#default-code)

## <a name="error-code">在浏览器中显示中文为乱码</a>
1. 乱码文件是否有在`<head>`标签的第一行加`<meta charset="UTF-8">`。若没有，则添加。刷新页面，若仍然是乱码。进入步骤2
1. windows系统上怎样创建文件时默认编码是ANSI编码。因此，如果是这样创建的文件，需要将文件的编码转化成UTF-8。然后刷新页面。是不是正常啦，哈哈。编码转化方式是：
    1. 用记事本打开文件
    1. 另存为文件时，选择编码为`UTF-8`（选择编码的位置在保存按钮旁边）。

关于，HTML编码是由以下几部分决定（优先级从高低）
1. HTTP头。`Content-Type:text/html;charset=utf-8`
1. meta。如`<meta charset="UTF-8">`
1. 浏览器的默认编码

更多可参考 [Web编码总结](http://yanhaijing.com/web/2014/12/20/web-charset/)

## <a name="default-code">windowsXP/win7/win8怎样创建新文件默认编码格式为UTF-8</a>
见<http://blog.sina.com.cn/s/blog_75ad10100101n96t.html>    

当然，也可以在sublime中新建文件。sublime中新建的文件，默认编码格式为UTF-8的





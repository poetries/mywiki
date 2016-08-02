# 远程调试手机页面工具：Weinre介绍
[Weinre(全称Web Inspector Remote)](https://people.apache.org/~pmuellr/weinre/docs/latest/)是一款的可以在电脑上远程调试手机页面的工具。

通过Weinre，我们可以在电脑上审查手机上页面的元素，选中的元素会有一个选中效果，并显示对应元素的样式。如下图所示：

![weinre-demo.jpg](http://upload-images.jianshu.io/upload_images/16777-af3c201081063a28.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240)

当在电脑上改变元素的样式时，手机上对应的元素的样式也会立即改变（无需刷新页面）。

除了审查元素的功能之外，如果在电脑上管理页面的Console选项卡执行JS代码，该JS代码会立即在手机上执行。

Weinre目前应该不支持在JS中打断点调试的功能。

如何安装和使用，可以见[Weinre入门手册](https://github.com/nupthale/weinre)。

需要注意的是
* 在Windows上安装Weinre时，cmd窗口需要用管理员身份打开。如果用npm安装Weinre失败，可以用cnpm来安装。
* 用`weinre`启动Weinre Server时，只有本机才能连接Weinre Server。如果需要手机可以连接Weinre Server，需要用 `weinre --boundHost -all-`或用`weinre --boundHost 手机IP`来启动Weinre Server。

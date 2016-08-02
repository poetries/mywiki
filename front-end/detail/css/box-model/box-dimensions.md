# 盒尺寸
页面上显示的每个元素（包括内联元素）都可以看作一个盒子，即盒模型( box model )。请看Chrome DevTools 里的截图：    
![盒模型](../../asset/box-model.png)

盒模型由 4 部分组成。从内到外分别是
```
content -> padding -> border -> margin
```
content的`200*200`分别为元素的宽高。

当我们设置`box-sizing: border-box;` 时，元素的宽高就包括来`border` 和 `padding`。

## 参考
* [CSS 最核心的几个概念](http://www.jianshu.com/p/3a18fcd9fcda?search_token=079525c515d193f008c9963224ab3a325b80f147b50ce129113c3a88f75b8bfa)

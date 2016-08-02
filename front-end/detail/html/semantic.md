# 标签语义化
## 目录
* [什么叫标签语义化](#define)
* [标签语义化的好处](#advantage)
* [怎么写出语义化良好的页面](#how)
* [兼容性](#compatibility)
* [拓展阅读](#reading)

## <a name="define">什么叫标签语义化</a>
用合理HTML标记以及其特有的属性去格式化文档内容。使开发者，机器能更好的理解文档。

## <a name="advantage">标签语义化的好处</a>
1. 有利于搜索引擎的检索（SEO）    
有利于搜索引擎对网页的结构和内容的分析，更容易查找到关键信息。
2. 便于代码的的理解和维护    
结构化的HTML文档，更容易被人理解。统一的编写标准，也便于团队协作和进行传播。
3. 脱离样式时仍然结构清晰    
去掉或丢失样式时，仍保持默认样式，不影响页面的可读性。对于无法有效执行CSS的特殊设备（如手机），也会保持可读的结构。
4. 有利于特殊群体的阅读    
很可能有访问者需要借助屏幕阅读器等设备来识别网页内容，语义化的页面更容易将有效信息分离出来。

## <a name="how">怎么写出语义化良好的页面</a>
怎么写出语义化良好的页面，其实就是选择合适的标签和属性。因此，我们要需要了解HTML各个标签的意思以及使用场景。    

写出语义化良好的页面是一个长期的过程。

## <a name="compatibility">兼容性</a>
HTML5的新增的语义化元素兼容性为IE9+和其他主流浏览器。详细见[这里](http://caniuse.com/#feat=html5semantic)。    

为让IE8-的浏览器支持HTML5的新元素，可使用[html5shiv](https://github.com/aFarkas/html5shiv)。

## <a name="reading">拓展阅读</a>
* [让我们来谈谈语义化](http://html5doctor.com/lets-talk-about-semantics/)
* [WHATWG 维护的 HTML 语义](https://html.spec.whatwg.org/multipage/semantics.html)
* [microformats(微数据)](http://microformats.org/)

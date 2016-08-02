# CSS3 Animate
主要分两个部分
* 动画的定义 `@keyframes`
* 动画的调用 `animation`

## 语法
```
animation: animation-name  animation-timing-function animation-delay animation-iteration-count animation-direction animation-fill-mode;
```

## 动画属性
* @keyframes 定义动画
* animation 所有动画属性的简写属性，除了 animation-play-state 属性。
* animation-name 规定 @keyframes 动画的名称。
* animation-duration 动画持续时间。
* animation-timing-function 规定动画的速度曲线。默认是 "ease"。
* animation-delay 延时。可以是负值。
* animation-iteration-count 播放次数，默认是1。无限循环用`infinite`
* animation-direction 规定动画是否在下一周期逆向地播放。默认是 "normal"。即
动画循环播放时，每次都是从结束状态跳回到起始状态，再开始播放。
* animation-play-state 规定动画是否正在运行或暂停。默认是 "running"。
* animation-fill-mode  	规定对象动画结束后的状态。

## 简单的例子
```
@keyframes rainbow {
  0% { background: #c00; }
  50% { background: orange; }
  100% { background: yellowgreen; }
}

div:hover {
  animation: 1s rainbow;
}
```

## animation-fill-mode
动画结束以后，会立即从结束状态跳回到起始状态。如果想让动画保持在结束状态，需要使用animation-fill-mode属性。    

animation-fill-mode的可选值
* none: 默认值，回到动画没开始时的状态
* forwards: 表示让动画停留在结束状态
* backwards：让动画回到第一帧的状态。如果`animation-direction`是reverse或alternate-reverse，则第一帧为结束状态的值
* both: 根据animation-direction（见后）轮流应用forwards和backwards规则

## animation-direction
animation-direction的可选值
* normal：默认值，从开始向结束状态循环
* alternate 从开始到结束，从结束到开始，以此循环
* reverse：从结束向开始循环
* alternate-reverse:从结束到开始，从开始到结束，以此循环。和alternate相反。

注意： 最常用的值是normal和reverse。浏览器对其他值的支持情况不佳，应该慎用

## keyframes的写法
keyframes关键字用来定义动画的各个状态，它的写法相当自由。
```
@keyframes rainbow {
  0% { background: #c00 }
  50% { background: orange }
  100% { background: yellowgreen }
}
```
0%可以用from代表，100%可以用to代表，因此上面的代码等同于下面的形式。
```
@keyframes rainbow {
  from { background: #c00 }
  50% { background: orange }
  to { background: yellowgreen }
}
```

如果省略某个状态，浏览器会自动推算中间状态，所以下面都是合法的写法。
```
@keyframes rainbow {
  50% { background: orange }
  to { background: yellowgreen }
}

@keyframes rainbow {
  to { background: yellowgreen }
}

@keyframes pound {
  from, to { transform: none; }
  50% { transform: scale(1.2); }
}

```

浏览器从一个状态向另一个状态过渡，是平滑过渡。steps函数可以实现分步过渡。
```
div:hover {
  animation: 1s rainbow infinite steps(10);
}
```
神奇的打字效果见[这里](http://dabblet.com/gist/1745856)

### 浏览器兼容性
Internet Explorer 10、Firefox 以及 Opera 支持 @keyframes 规则和 animation 属性。    
Chrome 和 Safari 需要前缀 -webkit-。


## CSS动画调试技巧
animation-delay用负值，加animation-play-state: paused;来查看某一帧的状态
[调试 CSS Keyframe 动画](http://www.w3ctech.com/topic/1472)

## 工具
* [贝塞尔曲线生成工具](http://cubic-bezier.com/)
* [缓动函数速查表](http://easings.net/zh-cn)


## 插件
* [animate.css](http://daneden.github.io/animate.css/) 包含很多动画效果
* [magic](http://minimamente.com/example/magic_animations/) 很多很绚的动画效果
* [Transformicons](http://www.transformicons.com/) 点击图标，图标变成另一个时的会带动画效果
* [IconHoverEffects](http://tympanus.net/Development/IconHoverEffects/) 图标hover时的动画
* [font awesome animation](http://l-lin.github.io/font-awesome-animation/) font awesome图标的动画


## 拓展阅读
* [CSS动画的PPT](http://hop.ie/talks/css-animation/)
* [阮一峰的CSS动画简介](http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html)
* [animation](https://css-tricks.com/almanac/properties/a/animation/) CSS Trick出品。
* [beiyuu的CSS动画](http://beiyuu.com/css3-animation/)
* [Lea Verou的动画的幻灯](http://lea.verou.me/css-4d/) [Lea Verou](http://lea.verou.me/) 是 dabblet的作者。还搞了很多牛掰的东西。偶像~
* [各种动画的演示页](http://leaverou.github.io/animatable/)
* [动画专题](stormhouse.github.io/posts/2013/animationzhuan/) 好多有关动画的文章
* [CSS TRIGGERS...](http://csstriggers.com/) CSS值的变化导致的页面的哪些操作（layout,paint,composite）

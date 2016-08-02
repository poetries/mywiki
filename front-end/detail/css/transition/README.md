# CSS3 过渡
在CSS 3引入Transition（过渡）这个概念之前，CSS是没有时间轴的。也就是说，所有的状态变化，都是即时完成。

## 语法
```
transition: property duration timing-function delay;
```
默认值：`transition:all 0 ease 0;`    

transition 属性是一个简写属性，用于设置四个过渡属性：
* transition-property 过渡属性
* transition-duration 持续时间
* transition-timing-function 缓动函数
* transition-transition-delay 延时

在同一行transition语句中，可以分别指定多个属性。
```
img{
    transition: 1s height, 1s width;
}
```

## 浏览器兼容性
Internet Explorer 10、Firefox、Opera 和 Chrome。

### transition-property
支持动画的css属性[见这里](http://oli.jp/2010/css-animatable-properties/)

#### transition-timing-function
transition的状态变化速度（又称timing function 缓动函数）。支持的值为
* linear 匀速
* ease 慢速开始，然后变快，然后慢速结束 等于 cubic-bezier(0.25,0.1,0.25,1)
* ease-in 先慢后快
* ease-out 先快后慢
* ease-in-out 慢速开始和结束 等于 cubic-bezier(0.42,0,0.58,1)
* cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。

#### transition-transition-delay
delay的真正意义在于，它指定了动画发生的顺序，使得多个不同的transition可以连在一起，形成复杂效果。

## transition的局限性
transition的优点在于简单易用，但是它有几个很大的局限。
* transition 需要事件触发，所以没法在网页加载时自动发生。
* transition 是一次性的，不能重复发生，除非一再触发。
* transition 只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。
CSS Animation就是为了解决这些问题而提出的。

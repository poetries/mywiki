# CSS3 Cheatsheet
## 说明
* `[]` 表示可选
* `|` 表示或
* `*` 表示循环0或N次

## box shadow
`box-shadow: 水平阴影的位置 垂直阴影的位置 [模糊距离] [阴影的颜色] [inset]`  
如
```
box-shadow: 9px 9px 33px -2px #bd2abd;
```

## 动画
`animation: 动画名称 动画持续时间 动画的速度曲线 延时（可以是负值） 播放次数 播放方向 动画的状态 动画结束后停留状态`  

`@keyframes： {百分数|from|to{属性：值} [,百分数|from|to{属性：值}]* }`  


如
```
p {
  animation: slidein 3s ease-in 1s;
}
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

```

## flex
父元素设置 `display: flex;`,以及
* flex-direction: 主轴方向。 row | row-reverse | column | column-reverse
* flex-wrap

更多见 [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)




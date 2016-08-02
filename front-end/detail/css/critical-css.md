# 加载CSS的优化：Critical CSS
加载CSS也会阻塞HTML的渲染。    
但显示页面并不需要等待所有的CSS（只有一些CSS也能展示的还不错），因此可以把CSS分成两类:
* 必要的（Critical Path）CSS
* 可以稍后加载的CSS

必要的CSS用内联style的方式放在head中    
可以稍后加载的CSS，放在`</body>`前，或用js来加载

## 如何判断是否是必要的
[Grunt插件](https://github.com/filamentgroup/grunt-criticalcss)或[Critical Path CSS Generator](https://github.com/pocketjoso/penthouse)

## 如果自己能判断
如果用Sass的话，可以用 [jacket](https://github.com/at-import/jacket)。

```
// style
.example {
  // Universal rules
  font-size: 1rem;
  padding:0 20px;

  // Conditional styles for an ie8 stylesheet
  @include jacket(ie8) {
    float: left;
  }

  // Conditional styles for an iOS and android app build of the stylesheet
  @include jacket(ios, android) {
    background-color: #c0ffee;
  }

  line-height: jacket(1.5, ios, site) jacket(1.3, android);
}
```

```
$jacket: ios;
@import 'style';

// Compiles to
.example {
  font-size: 1rem;
  padding: 0 20px;
  background-color: #c0ffee;
  line-height: 1.5;
}
```

## 拓展阅读
* https://css-tricks.com/authoring-critical-fold-css/




# BEM 介绍
[BEM](http://getbem.com/) 是由Yandex公司推出的一套CSS命名规范。BEM 能够帮助你在前端开发中实现可复用的组件和代码共享。

BEM 的名称来源于该方法学的三个组成部分的英文首字母，分别是块（Block）、元素（Element）和修饰符（Modifier）。这三个不同的组成部分称为 BEM 实体。

### 块
块即是通常所说的 Web 应用开发中的组件或模块。

### 元素
元素是块中的组成部分。元素不能离开块来使用。

### 修饰符
修饰符用来定义块或元素的外观和行为。同样的块在应用不同的修饰符之后，会有不同的外观。

## BEM 解决的问题
CSS 的样式应用是全局性的，没有作用域可言。 BEM 通过元素的命名遵循遵循 block-name__element-name–-modifier-name 来保证命名的唯一性。

代码示例
```
<div class="box">
  <div class="box__header">
    <h2 class="box__title">标题</h2>
  </div>
  <div class="box__body">
    <div class="box__content">
      内容。
    </div>
    <button class="button button--state-danger">
      Danger button
    </button>
  </div>
</div>
```

## BEM 常见问题
### 避免 .block__el1__el2
如
```
<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem1__elem2'>
            <div class='block__elem1__elem2__elem3'></div>
        </div>
    </div>
</div>
```

优化为
```
<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem2'>
            <div class='block__elem3'></div>
        </div>
    </div>
</div>
```

### modify 影响元素的写法
避免用 block-name–-modifier-name__element-name 的写法
```
// bad
<div class="block block--xmas">
  <button class="block__btn block--xmas__btn"></button>
</div>

// good

<div class="block block--xmas">
  <button class="block__btn"></button>
</div>
<style>
.block--xmas .block__button {
    /* Jingle bells, jingle bells, jingle all the way.*/
}
</style>
```

### 组件下的组件
避免用 block-name__block2-name 的写法

```
// bad
<div class='block'>
    <div class='block__block2'>
        <div class='block__block2__elem'>
        </div>
    </div>
</div>

// good
<div class='block'>
    <div class='block2 block2--modifier'>
        <div class='block2__elem'>
        </div>
    </div>
</div>
```

### 响应式组件的处理
用 @ 。如
```
<div class="block block2@sm"></div>
<style>
@media (min-width: 15em) {
  .block2\@sm {}
}
</style>
```

## 拓展阅读
* [Battling BEM (Extended Edition): 10 Common Problems And How To Avoid Them](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)
* [BEM FAQ](http://getbem.com/faq/#custom-tags-for-blocks)
* [BEMIT: Taking the BEM Naming Convention a Step Further](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) Healthchecks 这块挺有意思。

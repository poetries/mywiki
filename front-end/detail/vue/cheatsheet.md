# vue.js
[官网](http://cn.vuejs.org/)

## Hello World
```
<div id="app">
  {{ message }}
  <button v-on:click="clickMe()">点击</button>
  <button v-on:click="clickMe">无参数的简写</button>
</div>
```

```
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    clickMe: function(){}
  }
});
```

## 指令
### 循环
```
<li v-for="item in items"> 第{{ $index }}条:{{ item.message }}</li>
<span v-for="n in 10">{{ n }} </span>
```

### 条件
```
<div v-if="ok">Yes</div>
<div v-else>No</div>
<h1 v-show="ok">Hello!</h1>
```

### 事件绑定
```
<button v-on:click="say('hi')">点击</button>
<!-- 简写 -->
<button @click="say('hi')">点击</button>
<!-- 传入 event 对象 -->
<button @click="say('hi'， $event)">点击</button>
<!-- 阻止单击事件冒泡 -->
<button @click.stop="doSth">点击</button>
<!-- 阻止默认行为 -->
<button @submit.prevent="doSth">点击</button>
<!-- 修饰符可以串联 -->
<a @click.stop.prevent="doThat"></a>
<!-- 按键修饰符：回车时才会执行 -->
<input @keyup.13="submit"><!-- 13 为 keycode -->
<input @keyup.enter="submit">
<!-- 支持的全部按钮为 enter, tab, delete, space, up, down, left, right 字母 -->
```

### 表单的双向绑定
```
<input type="text" v-model="message">
<!-- 自定义选中值。否则 选中为value值，不选为空 -->
<input
  type="checkbox"
  v-model="toggle"
  v-bind:true-value="a"
  v-bind:false-value="b">
```

### 绑定属性
```
<div v-bind:class="{ 'class-a': isA, 'class-b': isB }"></div>
<!-- 简写 -->
<div :class="{ 'class-a': isA, 'class-b': isB }"></div>
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
<img :src="imgSrc">
<a :href="baseURL + '/path'">
```

### 避免闪烁： v-cloak
```
[v-cloak] {
  display: none;
}
```

```
<div v-cloak>
  {{ message }}
</div>
```

<div> 不会显示，直到编译结束。

### 单向绑定
```
<span>This will never change: {{* msg }}</span>
```

### 输出 HTML
```
<div>{{{ raw_html }}}</div> <!-- {{}} 中的 HTML 内容的会转为纯文本 -->
```

## 计算属性
```
<div id="demo">{{fullName}}</div>
```

```
new Vue({
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
});
```

### 自定义指令
```
Vue.directive('my-directive', {
  bind: function () {
    // 准备工作
    // 例如，添加事件处理器或只需要运行一次的高耗任务
    this.el;// 添加指令的元素
    this.vm.$get(name)// 获得该指令的上下文 ViewModel
    this.expression;// 指令的表达式的值
  },
  update: function (newValue, oldValue) {
    // 值更新时的工作
    // 也会以初始值为参数调用一次
  },
  unbind: function () {
    // 清理工作
    // 例如，删除 bind() 添加的事件监听器
  }
})
```

```
<div v-my-directive="someValue"></div>
```


## 监听数据变化
```
new Vue({
  data: {
    firstName: 'Foo'
  },
  watch: {
    firstName: function (val, oldVal) {
    }
  }
});
```

## 过滤器
```
{{ msg | capitalize }}// 'abc' => 'Abc'
```

常见内置过滤器  
capitalize, uppercase, lowercase, json, limitBy, filterBy。所有见[这里](http://cn.vuejs.org/api/#过滤器)。

### 自定义过滤器
```
Vue.filter('wrap', function (value, begin, end) {
  return begin + value + end;
});
```

```
<!-- 'hello' => 'before hello after' -->
<span v-text="message | wrap 'before' 'after'"></span>
```


## 生命周期相关的钩子函数
```
new Vue({
  created: function(){},
  beforeCompile: function(){},
  compiled: function(){},
  ready: function(){},// DOM 元素已经加入到HTML中
  beforeDestroy: function(){},
  destroyed: function(){}
});
```

## 过渡效果
```
<div v-if="show" transition="my-transition"></div>
```

```
/* 必需 */
.my-transition-transition {
  transition: all .3s ease;
}
/* .my-transition-enter 定义进入的开始状态 */
.my-transition-enter{}
/* .my-transition-leave 定义离开的结束状态 */
.my-transition-leave {}
```


## 组件
### 定义和调用组件
```
<my-comp
  prop="literal string"
  :prop1="defaultOneWay"
  :prop2.sync="twoWay"
  :prop3.once="oneTime">
</my-comp>
```

```
Vue.component('my-comp', {
  template: 'html strings',
  props: {
    prop: String,
    prop1: {
      type: Number,
      required: true
    },
    prop2: {
      type: Number,
      default: 88
    },
     // 对象/数组的默认值应当由一个函数返回
    prop3: {
      type: Object,
      default: function () {
        return { msg: 'hello' }
      }
    },
    // 自定义验证函数
    prop4: {
       validator: function (value) {
        return value > 10
      }
    }
  },
  data: functin(){
    return {

    }
  }

}
```

### 父子组件通信

```
// 子组件
var child = new Vue.component('child', {
  events: {
    'parent-msg': function (msg) {}
  }
});
// 子组件向父组件传消息
child.$dispatch('child-msg', child.msg);

// 父组件
var parent = new Vue({
  events: {
    'child-msg': function (msg) {
      // 父组件向所有子组件传消息
      this.$broadcast('parent-msg', 'received it');
    }
  }
});

```

this.$parent 访问它的父组件。  
this.$root 访问它的根组件。  
this.$children 访问它的子组件。


## 小技巧
### 渲染一个包含多个元素的块
```
<template v-for="item in items">
  <li>{{ item.msg }}</li>
  <li class="divider"></li>
</template>
<template v-if="user">
  <img :src="user.avatarUrl" alt="">
  <div class="name">{{user.name}}</div>
</template>
```
template 用于包含多个元素的块,最终的渲染结果不会包含 template 元素。



## vue 插件
### 路由: vue-router
[官方文档](http://router.vuejs.org/zh-cn/)

#### 定义路由
```
var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);
router.map({
  '/login': {component: require('login')},
  '/user/:': {component: ...},
  // 异步加载组件。加载器用的 webpack
  '/another': {component: function(resolve) {
      require.ensure([], function(require) {
        resolve(require('...'));
      });
    }},
});

router.redirect({ '*': '/login' }); // 默认路由

router.beforeEach(function(transition) {
  // console.info('show loading');
  transition.next();
}).afterEach(function(transition) {
  // console.info('hide loading');
});

// 启动
router.start(Vue.extend({}), '#app');

```


#### 使用路由

```
<a v-link.literal="/a/b/c"></a>
<a v-link="{ path: Foo }">Go to Foo</a>
```


```
new Vue({
  ready: function(){
    this.$route.path;
    this.$route.params;
    this.$route.query;
  },
  methods: {
    jumpUrl: function () {
      // 代码跳转
      this.$route.router.go('/a');
      this.$route.router.go({
        path: '/a',
        replace: true // 是否产生新的历史记录
      });
      this.$route.router.go({
        name: 'a', // 具名路径
        params: {},
        query: {}
      });
    }
  }
});

```

### 异步请求: vue-resource
[官网](https://github.com/vuejs/vue-resource)

```
Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);
Vue.http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
```

### 拦截
```
Vue.http.interceptors.push(function(request, next) {
  var data = request.data;
  // 添加 url 前缀
  request.url = serverPrefix + request.url;
  // 加请求参数
  request.data.sessionid = localStorage.getItem('sessionid');

  next(function (response) {
    if(登陆超时){
      setTimeout(function () {
        router.go('/login');
      });
    } else {
      // modify response
      response.body = '...';
    }
  });
});

```










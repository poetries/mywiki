# 用 npm scripts 来构建前端项目的尝试
最近读了 [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.n8tjc2j5e)。读完后，觉的这文章写的相当不错，就决定尝试下。

下面先简单介绍下 npm Scripts。

## 什么是 npm Scripts
Node.js 项目下一般都有一个 package.json 文件，文件的内容类似这样：
```
{
  "name": "node-js-sample",
  "version": "0.2.0",
  "description": "A sample Node.js app using Express 4",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.13.3"
  },
  "engines": {
    "node": "4.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/heroku/node-js-sample"
  },
  "keywords": [
    "node",
    "heroku",
    "express"
  ],
  "author": "Mark Pundsack",
  "contributors": [
    "Zeke Sikelianos <zeke@sikelianos.com> (http://zeke.sikelianos.com)"
  ],
  "license": "MIT"
}
```

其中，
```
"scripts": {
  "start": "node index.js"
}
```

即为 npm Scripts。

npm Scripts 是用定义来一些任务的。我们在命令行中执行 `npm run 任务名`，即可执行这个命令。如，在上面的例子中，如果在命令行中执行
```
npm run start
```

即会执行 start 对应的 `node index.js`.

## 用 npm Scripts 的优势
npm Scripts 中的任务可以调用命令行中的 API。换种说法，所有能在命令行中用的命令都可以在 npm Scripts 中用。是不是有点小激动~

例如，删除某个文件夹下的所有文件，可以这么写
```
"scripts": {
  "remove": "rm -rf 文件夹路径"
}

```

其中， `rm -rf 文件夹路径` 为 Unix/linux 下命令行中删除文件夹的命令。当然 Windows 并不支持该命令。要做到跨平台。可以用第三包[rimraf](https://www.npmjs.com/package/rimraf)。在你全局安装了 rimraf（`npm -g i rimraf`）后，配置
```
"scripts": {
  "remove": "rm -rf 文件夹路径"
}

```

执行 `npm run remove` 就能做到在不同平台都能删除文件夹。

如用用 Gulp 来做同样的事，就只能找 Gulp 的插件来做了（Grunt 也一样）。

## 进入正题
我做了一个前端脚手架项目:[front-end-scaffold](https://github.com/iamjoel/front-end-scaffold)(还处于 Alpha 状态)。下面具体介绍，用 npm Scripts 来构建该项目。

## 开发阶段
主要做这几件事：
* 启动静态服务器来查看做好的页面。用 Nodejs 的包 anywhere。之所以用静态服务器而不是直接在文件中打开 .html 文件的原因是：在文件中打开，页面的协议是 `file://`，如果该页面会在 JS 中加载一些资源或模拟 aJax 接口，其协议是 `http://` ，因为协议不同（跨域）而加载失败。用静态服务器不会产生这个问题。
* 监视 Sass 文件的变化。变化时，编译生成 CSS 以及 sourcemap。用 Compass。
* 监视 ES6 文件的变化。变化时，编译生成 ES5 的 JS 以及 sourcemap。用 Webpack 和 Babel。

在 package.json 的配置如下
```
"scripts": {
  // 开发时所有要做的
  "start": "node_modules/.bin/npm-run-all --parallel start:server watch:sass watch:es6",
  "watch:sass": "compass watch",// 监视 Sass 文件的变化
  "watch:es6": "node_modules/.bin/webpack --watch -d",// 监视 ES6 文件的变化
  "start:server": "node_modules/.bin/anywhere 1520 -d src"// 启动静态服务器
}
```

开发时只需执行
```
npm run start
```

其中 Compass 需要先安装。其他即几个在安装该项目的依赖时被安装
```
"devDependencies": {
    "npm-run-all": "1.6.0",
    "webpack": "1.12.14",
    "anywhere": "1.2.0"
}
```

## 发布时
主要做这几件事：
* 删除发布文件目录。用 Nodejs 的包 rimraf。
* 将 ES6 代码编译成 ES5 代码，合并（如果有需要的话），并压缩。用 Webpack + Babel。
* 将 Sass 代码编译成 CSS 代码，并压缩。用 Compass。
* 将 源代码目录下的除了 ES6 和 Sass 代码外的其他代码都移动到发布文件目录下。用 Gulp。用 Gulp 是为了跨平台，如果不要跨平台，可以用当前平台的命令行的命令来做移动目录会更简单。

在 package.json 的配置如下
```
"scripts": {
  "prebuild": "npm run remove-dist", // 执行 npm run build 前会自动执行的任务
  // 发布时所有要做的
  "build": "npm run build:css && npm run build:js && npm run moveAssets",
  "build:js": "node_modules/.bin/webpack -p", // 将 ES6 代码编译成 ES5 代码，合并（如果有需要的话），并压缩。
  "build:css": "compass compile",
  "moveAssets": "node_modules/.bin/gulp",// 将 源代码目录下的除了 ES6 和 Sass 代码外的其他代码都移动到发布文件目录下。
  "remove-dist": "node_modules/.bin/rimraf ./dist"// 删除发布文件目录。
}
```

发布时只需执行
```
npm run build
```

Happy Coding~

## 参考链接
* [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.n8tjc2j5e) [我为何放弃Gulp与Grunt，转投npm scripts[译]](http://www.infoq.com/cn/news/2016/02/gulp-grunt-npm-scripts-part2)
* [react-slingshot](https://github.com/coryhouse/react-slingshot/blob/master/package.json)
* [npm-scripts](https://docs.npmjs.com/misc/scripts)

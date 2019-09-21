---
sidebar: auto
prev: ./taro-init
---


# Taro设计思想和原理解读

> [Taro](https://taro.aotu.io/)诞生之初是为了解决微信小程序开发的一系列痛点，并逐步演变成一个多终端开发框架。

## 设计思想
### 关于小程序

一个小程序页面或者组件有四部分组成：`脚本逻辑`，`样式文件`，`模板文件`，`配置文件`，即：`js`,`json`,`wxml`,`wxss`，当开发一个功能模块时需要在各个文件间来回切换，其次是在前端工程化思想深入人心的今天，小程序的开发方式有些落伍，主要体现在以下方面：
* 没有自定义文件预处理，无法直接使用Sass，Less等css预处理器
* 字符串模板模仿Vue，但是并没有提供Vue那么多的语法糖，当实现较为复杂的处理时，书写体验糟糕。
* 缺乏测试套件，无法编写测试代码来测试，不能进行持续集成和自动化打包

### React语法开发小程序

在开发方式上，Taro打造了一套完善的编译工具，引入了前置编译的机制，可以自动化的对源文件进行一系列的处理，最终输出小程序的可执行文件，包括代码的编译转换处理，加入文件预处理功能，支持npm包管理等。

采用React语法开发的原因如下：
* React是一个非常流行的框架，使用它可以降低开发者的学习成本
* 小程序的数据驱动模板更新的思想和实现机制与React类似
* React使用JSX作为模板，JSX相对字符串模板更加自由，自然，不需要依赖各种语法糖也能完成比较复杂的处理
* React本身的跨端处理方案：react-native，对于Taro来说有跨更多端的可能性

### 如何实现优雅开发

Taro采用的是`编译原理`的思想，所谓编译原理，就是一个对输入的源代码进行 语法分析，语法树构建，随后对语法树进行转换操作再解析成目标代码的过程

![](https://user-gold-cdn.xitu.io/2018/10/8/1665182480dfc020?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

源代码-> 分词  -> 词法分析  -> 代码字符串  -> 语法分析  -> 构建语法树  -> 语义分析 => 检查程序正确性 -> 转换操作 -> 语法树转换  -> 目标代码

### 多端转换-抹平差异

不同端即不同平台的差异主要体现在 **不同的组件标准**  和 **不同的API标准**以及**不同的运行机制**上

如小程序和web端在`组件标准`和`API标准` 上有很大差异，这些差异仅仅通过编译手段是无法抹平的，例如不能直接将<View>直接编译成<div>，虽然他们看上去很类似，但是他们的组件属性有很大不同，仅仅依靠代码编译，无法做到一致，因此，Taro制定了一套运行时标准来抹平不同平台之间的差异。

> ps ：运行时 

> TODO 单一篇文章总结一下


包括： `标准运行时框架`  `标准基础组件库`  `标准端能力API` 

其中，运行时框架和API对应@taro/taro，组件库对应@taro/components,通过在不同端实现这些标准，从而达到去差异化的目的。

大体流程是在 编译时 将Taro代码转成各端代码，在运行时调用`Taro bootstrap` `Taro组件库`  `Taro API`从而适配多端应用

## CLI原理及运行机制


> [taro-cli](https://www.npmjs.com/package/@tarojs/cli)是Taro脚手架初始化和项目构建时的命令行工具

taro-cli包位于taro工程的Packages目录下，全局安装之后，通过Taro命令可以进行一系列操作。

### 包管理与发布

先看一下Taro工程的目录结构。

![](https://s2.ax1x.com/2019/05/19/EvAe58.png)

可以看到项目主要由一系列npm包组成，位于工程的Packages目录下，Taro的包管理方式和babel项目一样，将整个项目作为一个monorepo来进行管理，并且同样适用了包管理工具[Lerna](https://github.com/lerna/lerna)

Packages下的几十个包中，Taro-cli就是其中之一。在Taro工程根目录运行lenra pubish命令之后，lerna.json文件里面配置好的所有包会发布到NPM上。

### 目录结构

taro-cli包的目录结构如下：
```js
./
├── bin        // 命令行
│   ├── taro              // taro 命令
│   ├── taro-build        // taro build 命令
│   ├── taro-update       // taro update 命令
│   └── taro-init         // taro init 命令
├── package.json
├── node_modules
├── src
│   ├── build.js        // taro build 命令调用，根据 type 类型调用不同的脚本
│   ├── config
│   │   ├── babel.js        // Babel 配置
│   │   ├── babylon.js      // JavaScript 解析器 babylon 配置
│   │   ├── browser_list.js // autoprefixer browsers 配置
│   │   ├── index.js        // 目录名及入口文件名相关配置
│   │   └── uglify.js
│   ├── creator.js
│   ├── h5.js       // 构建h5 平台代码
│   ├── project.js  // taro init 命令调用，初始化项目
│   ├── rn.js       // 构建React Native 平台代码
│   ├── util        // 一系列工具函数
│   │   ├── index.js
│   │   ├── npm.js
│   │   └── resolve_npm_files.js
│   └── weapp.js        // 构建小程序代码转换
├── templates           // 脚手架模版
│   └── default
│       ├── appjs
│       ├── config
│       │   ├── dev
│       │   ├── index
│       │   └── prod
│       ├── editorconfig
│       ├── eslintrc
│       ├── gitignore
│       ├── index.js    // 初始化文件及目录，copy模版等
│       ├── indexhtml
│       ├── npmrc
│       ├── pagejs
│       ├── pkg
│       └── scss
└── yarn-error.log
```


## JSX转换各端模板

## 运行时实现


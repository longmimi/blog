---
sidebar: auto
prev: false
---


# 基础篇

## 安装

本地安装  
```js
npm install webapck webpack-cli --save-dev
```

## 0 配置使用

即默认配置，功能十分单一，会将`src`目录下的`index.js`文件打包到`dist`目录下，并命名为`main.js`

```js
// test.js 文件内容
console.log('longtean')

// index.js 文件内容
const str = require('./test.js')
console.log(str)

//main.js打包后输出内容

!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function(e, t, n) {
    const r = n(1);
    console.log(r);
  },
  function(e, t) {
    e.exports = "longtean";
  }
]);
```

可以看到，由于使用了commonJS的模块化语法，而这个模块化语法无法运行在浏览器端，webpack在打包输出的文件里帮我们进行了处理，使得代码可以运行在浏览器端。

## 手动配置

根目录新建配置文件 `webpack.config.js`

默认的配置文件名写法有两种，第二种是`webpackfile.js`,在运行webpack命令后，会执行node_modules下的`webpack-cli/bin/config-yargs.js`,defaultDescription属性中规定了默认配置文件名称

```js
const path = require('path')

module.exports = {
  mode:'development', //模式    默认 production 和 development
  entry:'./src/index.js', //入口文件
  output:{
     filename:'bundle.[hash:8].js', //打包后的文件名
    path: path.resolve(__dirname,'dist'), //路径必须是绝对路径 resolve()方法可以将相对路径解析为绝对路径
  }
}
```

development模式打包出的bundle.js

```js
  (function(modules) { // webpackBootstrap
 	// 模块缓存
 	var installedModules = {};

 	// 实现 require 方法  __webpack_require__
 	function __webpack_require__(moduleId) {

 		// Check if module is in cache
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

 		// Execute the module function
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
 		module.l = true;

 		// Return the exports of the module
 		return module.exports;
 	}


 	// expose the modules object (__webpack_modules__)
 	__webpack_require__.m = modules;

 	// expose the module cache
 	__webpack_require__.c = installedModules;

 	// define getter function for harmony exports
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
 		}
 	};

 	// define __esModule on exports
 	__webpack_require__.r = function(exports) {
 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 		}
 		Object.defineProperty(exports, '__esModule', { value: true });
 	};

 	// create a fake namespace object
 	// mode & 1: value is a module id, require it
 	// mode & 2: merge all properties of value into the ns
 	// mode & 4: return value when already ns object
 	// mode & 8|1: behave like require
 	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value);
 		if(mode & 8) return value;
 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 		return ns;
 	};

 	// getDefaultExport function for compatibility with non-harmony modules
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};

 	// Object.prototype.hasOwnProperty.call
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

 	// __webpack_public_path__
 	__webpack_require__.p = "";


   // 加载入口模块 返回导出的对象
 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
 })
/************************************************************************/
 ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const str = __webpack_require__(/*! ./test.js */ \"./src/test.js\")\nconsole.log(str)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = 'longtean test'\n\n//# sourceURL=webpack:///./src/test.js?");

/***/ })

 });

```

**也可以指定配置文件名称**

运行 webpack --config webpack.config.`selfname`.js  就可以以指定配置文件进行打包

或者package.json 文件中添加script脚本

```js
//package.json
{
  "scripts": {
    "build": "webpack --config webpack.config.js"  //在这里进行配置
  }
}
```

## devServer

安装本地开发服务器

```js
npm i webpack-dev-server -D
```
添加执行脚本
```js
//package.json
{
  "scripts": {
    "dev": "webpack-dev-server" 
  }
}
```
配置本地服务
```js
//webpack.cpnfig.js

 devServer:{ //开发服务器配置
    port:3001,
    progress:true, //是否显示进度条
    contentBase: './dist', //以指定目录运行静态服务
    open:true, //自动打开浏览器
    compress:true  //压缩
 }

```
npm run dev 即可自动打开浏览器并访问3001端口

## Html处理

src目录下创建index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

需要安装 `html-webpack-plugin`插件

```js
npm i html-webpack-plugin -D
```
在配置文件中引入
```js
//webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  ...
  
  plugins:[ //数组，放置左右webpack插件
    new HtmlWebpackPlugin({
      template:'./src/index.html', //模板文件路径
      filename:'index.html',  //输出文件名
      minify:{
        removeAttributeQuotes:true, //删除双引号
        collapseWhitespace:true //折叠空行
      },
      hash:true //加hash
    })
  ]
}
```

## css处理

src下创建index.css index.scss文件

```css
body{
    background:#000;
}
```
index.js中引入样式文件
```js
require('./index.css')
require('./index.scss')
```

webpack并不能识别css代码，这时候需要安装loader来解析

安装 `css-loader` `style-loader` `sass-loader` `node-sass`
```js
npm i css-loader style-loader sass-loader node-sass -D
```
在配置文件中添加module配置
```js
module.exports={
  ...
  module:{//模块
    rules:[ 
      //规则 css-loader 解析 @import 
      //style-loader css插入head标签
      //使用单个时loader名为字符串，多个loader时数组，需要配置参数options时对象
      //loader执行顺序为自右向左 自下而上
     {
        test:/\.css$/,
        use:[
          {
            loader:'style-loader',
            options:{
              insertAt:'top'  //style标签插入到顶部
            }
          },
          'css-loader'
        ]
      },
      {
        test:/\.scss$/,
        use:[
          {
            loader:'style-loader',
            options:{
              insertAt:'top'  //style标签插入到顶部
            }
          },
          'css-loader',
          'sass-loader' // sass-loader 依赖node-sass  所以也得安装
        ]
      }
    ]
  }
}
```

npm run build 之后就会发现，css样式以style标签的形式，被插入在了`head`标签的顶部

如果想将css分离成独立的css文件，以link的形式引入，则需要用到`mini-extract-plugin`这个插件

修改配置文件
```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports={
  plugins:[ 
   ...
    new MiniCssExtractPlugin({
      filename:'main.css'
    })
  ],
  module:{
    rules:[ 
      {
        test:/\.css$/,
        use:[
            //用MiniCssExtractPlugin.loader 代替 style-loader
            MiniCssExtractPlugin.loader,
           'css-loader'
        ]
      },
      {
        test:/\.scss$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
```
build之后就会发现，打包出来的main.css以link形式被引入到了html文件中。

如果想给css自动添加前缀，则需要安装`postcss-loader`和`autoprefixer`这两个插件

```js
{
    test:/\.scss$/,
    use:[
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader' // sass-loader 依赖node-sass  所以也得安装
    ]
}
```

需要给postcss添加一个配置文件才能使用postcss,根目录添加`postcss.config.js`

```js
module.exports = {
    plugins:[require('autoprefixer')]
}
```

之前的js文件都是压缩的，想要css也压缩的话，需要使用插件`optimize-css-assets-webpack-plugin`

修改配置文件
```js
const OptimizeCss = require('optimize-css-assets-webpack-plugin')

module.exports = {
  optimization:{ //优化项
    minimizer:[
      new OptimizeCss()
   ]
  },
  ...
}
```
运行后发现，css被压缩，但是js却没有压缩，这是因为optimization.minimizer属性后js就默认不被压缩了，使用`gulifyjs-webpack-plugin`插件可以压缩js

安装之后修改配置文件

```js
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  optimization:{ //优化项
    minimizer:[
      new OptimizeCssAssetsPlugin(),
      new UglifyJsPlugin({
        cache:true,
        parallel:true //支持同时压缩多个
      })
   ]
  },
  mode:'production', //模式    默认 production 和 development
 ...
}
```
再次npm run build之后，文件都被压缩了


## 处理js

### 1. **处理es6+**

在index.js中写一些es6的语法，在build之后发现打包出来的js仍旧使用ES6写法，为了兼容性，我们需要转化成ES5的写法，这时候需要安装`babel`

```js
npm i babel-loader @babel/core @babel/preset-env -D
```

修改配置文件
```js
module.exports = {
 ...
  module:{//模块
    rules:[{
        test:/\.js$/,
        use:{
          loader:'babel-loader', 
          options:{
            presets:[
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  }
}
```
之后npm run build之后就可以将es6代码转化成es5代码了

接下来往index.js增加
```js
class A{
    a=1;
}
let a = new A()
console.log(a.a)
```
`npm run build`之后发现提示需要安装`@babel/plugin-proposal-class-properties`插件，这是因为class属性目前处于提案中，所以babel通过单独插件的方式来支持编译。

安装这个插件之后修改配置文件
```js
module.exports = {
 ...
  module:{//模块
    rules:[{
        test:/\.js$/,
        use:{
          loader:'babel-loader', 
          options:{
            presets:[
              '@babel/preset-env'
            ]，
            
          }
        }
      }
    ]
  }
}
```

如果我们要使用装饰器模式的话，需要安装插件`@babel/plugin-proposal-decorators`

```js
@log

class A{
  a = 1;
}
let a = new A()
console.log(a.a)

function log(target){
  console.log(target)
}
```

修改配置文件

```js
module.exports = {
 ...
  module:{//模块
    rules:[{
        test:/\.js$/,
        use:{
          loader:'babel-loader', 
          options:{
            presets:[
              '@babel/preset-env'
            ]，
            plugins:[
              //注意安装顺序
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ]
  }
}
```

在test.js 写另外一个Class B，同时也写一些处理异步流程的Generator语法
```js
class B{

}

function * gen(params){
  yield 1;
}
 
console.log(gen().next())

```

打包之后，发现虽然将ES6转化为了ES5的语法，但是gemerator这中内置api并没有转化，所以需要安装插件`@babel/plugin-transform-runtime`,以及在生产环境下注入一些脚本依赖的插件`@babel/runtime`，通过创建了一个helper方法将需要用到的公共方法抽离出来，避免了多个模块定义重复定义方法。

如果代码中存在一些实例上的方法，比如说数组的includes(),在编译的过程中是不会进行转化的，需要安装`@babel/polyfill`,因为需要在代码运行时使用，所以不能`--save-dev`来安装，插件会在Array的原型上重新实现个includes方法。

安装之后，修改配置文件

```js
import "@babel/polyfill";

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"] 
};
```

通过在入口文件添加polyfill插件，为打包之后的代码插入在原有的JS内置对象及方法上做向后兼容的处理的代码。比如说ES5里面的 Object 是没有自带 assign 方法的，那么你加载了babel-polyfill 之后，它就给 Object 扩展了一个 assign 方法，这样你就可以直接使用 Object.assign(obj1, obj2) 了

### 2. **增加eslint**

添加eslint可以对我们的代码添加一些语法规范的校验

安装 `npm i eslint eslint-loader -D`

在配置文件中添加loader
```js
module.exports = {
    ...
    module:{
        rules:[
        {
            test:/\.js$/,
            use:{
                loader:'eslint-loader',
                options:{
                    enforce:pre //强制在最前面执行，最先执行的loader
                }
            }
        }
       ]
    }
}
```

可以在eslint官网根据自己的需求勾选不同的规则，最终生成`.eslintrc.json`文件放置在项目的根目录中。

## 全局变量引入


### 暴露到全局对象上
想要全局引用某个变量，需要用到`expose-loader`

```
npm  i expose-loader -D
```

在index.js中引入 jquery的 `$` 并暴露给window对象

```
import 'expose-loader?$!jquery'

console.log(window.$)
```

npm run dev 之后控制台可以打印出$对象

也可以再webpack配置文件中添加

```js
{
    ...
    rules:[
        {
            test:require.resolve('jquery'), //匹配模块中对jq的引用
            use:'expose-loader?$'  //暴露给全局的window.$
        }
    ]
}
```

这种方式需要在使用的文件中手动的import jquery,还有另外一种方式，可以将$注入到每个模块中这样我们就可以任意的使用$而不需要手动引入了

### 注入到每个模块

需要使用到webpack的插件 在配置文件的plugin中添加
```js
const webpack = require('webpack')
plugins: [
    new webpack.ProvidePlugin({ //在每个模块中都注入$
      $:'jquery'
    })
]
```

### 引入不打包

如果我们通过import等引入了jq,但不希望webpack把这个库打包进bundle,js  就可以使用`externals`,在配置文件中添加

```js
{
    ...
    externals:{
        jquery:'$' //引入$ 不打包
    }
}
```
这种方式就需要依赖运行环境包含`$`


> 总结 <br>
> 1.expose-loader 暴露到window上  <br>
> 2.webpack.ProvideOlugin 注入到每个模块 <br>
> 3.引入不打包 <br>

## 图片处理

在js中通过import或者require来引入图片，是一个字符串，并不能被webpack识别，需要使用`file-loader`来处理图片的路径

```js
npm i file-loader -D
```

在配置文件中添加
```js
{
    rules:[
        {
            test:/.\(jpg,png,gif)$/,
            //css中引入的图片会被css-loader处理成require方式引入
            use:'file-loader'
        }
    ]
}
```

如果想要在HTML文件中引入图片，需要使用loader `html-withimg-loader`,解析出html中的图片引入

安装之后配置rules
```js
{
    rules:[
        {
            test:/\.html$/,
            use:'html-withimg-loader'
        }
    ]
}
```

开发中图片很多，一些比较小的图片可以转化成base64格式，从而减少http请求，需要用到`url-loader`

安装之后修改配置文件
```js
{
    rules:[
        {
            test: /\.(png|jpg|gif)$/,
			// 当图片小于200k时转化为base64格式
			// 大于则使用url-loader内置的file-loader处理
			use: {
				loader: 'url-loader',
				options: {
					limit: 200*1024,
					outputPath:'/img/', 
					PubilcPath:'https://daojia.jd.com' 
					
				}
			}
        }
    ]
}
```











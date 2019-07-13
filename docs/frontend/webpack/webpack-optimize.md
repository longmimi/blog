---
sidebar: auto
prev: ./webpack-base
---

# webpack优化

## noParse

wekpack的module有一个 noParse 属性，可以设置不解析引入库的依赖


```js
  module.exports = {
    module:{
      noParse:/jquery/  //不解析jquery的依赖 
    }
  }
```

## ignorePlugin

这是webpack的内置插件，当项目中引入了库的时候，这些库还会引入其他一些库，可以通过这个插件将这些引入的库忽略，减小打包的体积。

例如引用monment这个库时，会引入很多语言包文件，这些对于我们来说并不需要，这些包都存放在./locale目录下

```js
const webpack = require('webpack')

module.exports = {
    ...
    plugins:[
        //忽略 moment 引入的库
        new webpack.IgnorePlugin(/./locale/,/moment/)
    ]
}
```


## dllPlugin

通过提供分离包的方式来提升构建时间性能，使打包更快。其主要思想就是 将一些不做修改的依赖文件，提前打包，这样再发布前打包代码的时候就不需要对这部分代码进行打包。

在原来打包文件的基础上，新建一个webpack.dll.conf.js，webpack.dll.config.js作用是把所有的第三方库依赖打包到一个bundle的dll文件里面，还会生成一个名为 manifest.json文件，manifest.json的作用是用来让 DllReferencePlugin 映射到相关的依赖上去的

*DllReferencePlugin*

这个插件是在webpack.config.js中使用的，该插件的作用是把刚刚在webpack.dll.config.js中打包生成的dll文件引用到需要的预编译的依赖上来.就是说在webpack.dll.config.js中打包后比如会生成 vendor.dll.js文件和vendor-manifest.json文件，vendor.dll.js文件包含所有的第三方库文件，vendor-manifest.json文件会包含所有库代码的一个索引，当在使用webpack.config.js文件打包DllReferencePlugin插件的时候，会使用该DllReferencePlugin插件读取vendor-manifest.json文件，看看是否有该第三方库。vendor-manifest.json文件就是有一个第三方库的一个映射

只需要对这些第三方库打包一次，以后每次打包webpack.conf.js的时候，只需要打包项目的代码，当使用到第三方依赖的时候，会使用DllReferencePlugin 读取已经提前打包好的第三方库，从而提高打包速度，当第三方库有更新的时候，咋需要从新打包webpack.dll.conf.js 

webpack.dll.conf.js

```js
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry:{
        vender:[
            'react',
            'react-dom',
            'babel-polyfill'
        ]
    },
    output:{
        filename:'[name].dll.js',
        path:path.resolve(__dirname,'dist'),
        library:'[name]_library' //可选，暴露出的全局变量名字
        // 主要是给DllPlugin中的name使用，
        // 所以这里需要和webpack.DllPlugin中的`name: '[name]_library',`保持一致
        
    },
    plugins:[
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', '[name]-manifest.json'), //生成上文说到清单文件，放在dist文件下面
            name: '[name]_library'
        })
    ]
    
}
```

webpack.conf.js

先安装add-asset-html-webpack-plugin这个插件，目的是给生成的vender.dll.js加上hash值,然后插入到htmk中去 


```js
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
    plugins:[
          new webpack.DllReferencePlugin({
                context: path.resolve(__dirname, '..'),  //manifest文件中请求的上下文
                manifest: require('./dist/vendor-manifest.json')
            }),
    //这个主要是将生成的vendor.dll.js文件加上hash值插入到页面中。
    new AddAssetHtmlPlugin([{
      filepath: path.resolve(__dirname,'../dist/js/vendor.dll.js'),\
      includeSourcemap: false,
      hash: true
    }]),
    ]
}
 
```

最后，在package.json中配置运行命令
```js
{
    "scripts":{
        "build:dll": "webpack --config webpack.dll.conf.js"
    }
}
```


## happypack

happypack 可以开启多线程打包，这对于比较大的项目，可以提高打包速度。

`npm i happypack -D`

```js
const happypack = require('happypack')

module.exports = {
    plugins:[
        new happypack({
            id:'js',
            use:[{
                loader:'babel-loader',
                options:{
                    preset:['@babel/preset-env']
                }
            }]
        }),
        new happypack({
            id:'css',
            use:[
                MiniCssExtractPlugin.loader,
				'css-loader',
				'postcss-loader'
			]
        })，
    ],
    module:{
        rules: [
		{
			test: /\.js$/,
			//js用happypack/loader多线程打包
			use: 'happypack/loader?id=js',
			include: path.resolve(__dirname, 'src'),
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			//css用happypack/loader多线程打包
			use: 'happypack/loader?id=css',
			include: path.resolve(__dirname, 'src'),
			exclude: /node_modules/
		}]
    }
}
```

由于分配多线程也需要占用时间，因此在比较小的项目上效果不明显。




## webpack自带优化

* tree-shaking

通过import 语法引入的模块，在生产环境下，会自动去掉没用到的代码，这就是tree-shking,require不支持

 [Tree-Shaking性能优化实践-原理篇](https://juejin.im/post/5a4dc842518825698e7279a9)
 
[Tree-Shaking性能优化实践 - 实践篇](https://juejin.im/post/5a4dca1d518825128654fa78)

[Webpack4:Tree-shaking深度解析](http://blog.ctomorrow.top/2019/02/15/tree-shaking/)


* scope hosting  

作用域提升，可以自动省略，可以简化的代码

[Webpack 3 的新功能：Scope Hoisting](https://zhuanlan.zhihu.com/p/27980441)



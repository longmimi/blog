---
sidebar: auto
prev: false
---

# 初见Taro

> [Taro](https://taro.aotu.io/)是京开源的一套遵循 React 语法规范的多端统一开发框架，经过一段时间的学习使用，总结一些比较基础的知识


##  与React的差异

由于微信小程序的限制，React 中某些写法和特性在 Taro 中还未能实现

> 暂不支持在 render() 之外的方法定义 JSX

由于微信小程序的 template 不能动态传值和传入函数，Taro 暂时也没办法支持在类方法中定义 JSX

方案： render中定义

> 不能在包含 JSX 元素的 map 循环中使用 if 表达式

方案：尽量在 map 循环中使用条件表达式或逻辑表达式

> 不能使用 Array.map 之外的方法操作 JSX 数组

Taro 在小程序端实际上把 JSX 转换成了字符串模板，而一个原生 JSX 表达式实际上是一个 React/Nerv 元素(react - element)的构造器，因此在原生 JSX 中你可以对任何一组 React 元素进行操作。但在 Taro 中你只能使用 map 方法，Taro 转换成小程序中 wx:for

方案：先处理好需要遍历的数组，然后再用处理好的数组调用 map 方法

> 不能在 JSX 参数中使用匿名函数

使用 bind 或 类参数绑定函数

> 不能在 JSX 参数中使用对象展开符

微信小程序组件要求每一个传入组件的参数都必须预先设定好，而对象展开符则是动态传入不固定数量的参数。所以 Taro 没有办法支持该功能

方案：将需要传递的参数自行传递

> 不允许在 JSX 参数（props）中传入 JSX 元素

由于微信小程序内置的组件化的系统不能通过属性（props） 传函数，而 props 传递函数可以说是 React 体系的根基之一，Taro 自己实现了一套组件化系统。而自制的组件化系统不能使用内置组件化的 slot 功能。两权相害取其轻，只能暂时不支持该功能

方案：通过 props 传值在 JSX 模板中预先判定显示内容，或通过 props.children 来嵌套子组件。

> 不支持无状态组件（Stateless Component)

由于微信的 template 能力有限，不支持动态传值和函数，Taro 暂时只支持一个文件只定义一个组件。为了避免开发者疑惑，暂时不支持定义 Stateless Component



## 最佳编码方式

目前 Taro 在微信小程序端是采用依托于小程序原生自定义组件系统来设计实现 Taro 组件化的，所以目前小程序端的组件化会受到小程序原生组件系统的限制，而同时为了实现以 React 方式编写代码的目标，Taro 本身做了一些编译时以及运行时的处理，这样也带来了一些值得注意的约束



### 自定义组件样式

微信小程序的 [自定义组件样式](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)默认是不受外部样式影响的。，如果在页面中引入了自定义组件，然后直接写样式是不生效的

### 给组件设置 <span style="color:red">defaultProps</span>

在微信小程序端的自定义组件中，只有在 `propertries`中制定的属性，才能从父组件传入并接收
而在Taro中，对于组件代码中使用到的来自 `props`的属性，会在编译时识别并加入到编译后的`propertries`中，但是可能会有某一属性没有使用而直接传给子组件，这种情况在编译时处理不到的，因此需要在写代码时给组件设置默认属性

组件设置的 `defaultProps` 会在运行时用来弥补编译时处理不到的情况，里面所有的属性都会被设置到 `properties` 中初始化组件，正确设置 `defaultProps` 可以避免很多异常的情况的出现。


### 组件传递函数属性名以 `on` 开头

父组件往子组件传递函数，必须以 on  开头


```js
<CustomComponents onMyEvent={this.handleEvent}></CustomComponents>
```


因为在微信小程序端组件化是不能直接传递函数类型给子组件的，Taro是借助[事件机制](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)来实现的，在小程序中传入事件时属性名写法为 bindevent 或者 bind:event 

```javascript
<!-- 当自定义组件触发“myevent”事件时，调用“onMyEvent”方法 -->
<component-tag-name bindmyevent="onMyEvent" />
<!-- 或者可以写成 -->
<component-tag-name bind:myevent="onMyEvent" />
```

和内置组件的绑定事件写法保持一致

### 小程序端不要在组件中打印传入的函数

### 小程序端不要将在模板中用到的数据设置为 undefined

小程序中不允许将data中value设置为 `undefined` ,在setState时避免这么使用，用null代替

### 小程序端不要在组件中打印 this.props.children

小程序端是通过<slot /> 来实现往自定义组件中传递元素的， Taro利用 this.props.children 在编译h是实现了这一功能，在编译时直接将 this.props.children 编译成<slot /> 标签，在小程序中是语法糖的存在

### 组件属性传递注意

不要以 `id`、`clas`s、`styl` 作为自定义组件的属性与内部 `state` 的名称，因为这些属性名在微信小程序中会丢失

### 组件 `stat` 与 `prop` 里字段重名的问题

不要在 `state` 与`props` 上用同名的字段，因为这些被字段在微信小程序中都会挂在 `data` 上

### 小程序中页面生命周期 componentWillMount 不一致问题

由于微信小程序里页面在 `onLoad` 时才能拿到页面的路由参数，而页面 `onLoad` 前组件都已经` attached` 了。因此页面的 componentWillMount 可能会与预期不太一致

```js
// 错误写法
render () {
  // 在 willMount 之前无法拿到路由参数
  const abc = this.$router.params.abc
  return <Custom adc={abc} />
}

// 正确写法
componentWillMount () {
  const abc = this.$router.params.abc
  this.setState({
    abc
  })
}
render () {
  // 增加一个兼容判断
  return this.state.abc && <Custom adc={abc} />
}
```


### 组件的 constructor 与 render 提前调用

在 Taro 编译到小程序端后，组件的 constructor 与 render 默认会多调用一次，表现得与 React 不太一致
. 这是因为，Taro 的组件编译后就是小程序的自定义组件，而小程序的自定义组件的初始化时是可以指定` data` 来让组件拥有初始化数据的。开发者一般会在组件的 `constructor` 中设置一些初始化的 `state`，同时也可能会在` render` 中处理 state 与 props 产生新的数据，在 Taro 中多出的这一次提前调用，就是为了收集组件的初始化数据，给自定义组件提前生成 data ，以保证组件初始化时能带有数据，让组件初次渲染正常。

所以，在编码时，需要在处理数据的时候做一些容错处理，这样可以避免在 constructor 与 render 提前调用时出现由于没有数据导致出错的情况


### JS 编码必须用单引号

在 Taro 中，JS 代码里必须书写单引号，特别是 JSX 中，如果出现双引号，可能会导致编译错误

### 环境变量 `process.env` 的使用

```js
// 错误写法，不支持
const { NODE_ENV = 'development' } = process.env
if (NODE_ENV === 'development') {
  ...
}

// 正确写法
if (process.env.NODE_ENV === 'development') {

}
```

### 预加载

在微信小程序中，从调用 ·Taro.navigateTo`、`Taro.redirectTo` 或 `Taro.switchTab` 后，到页面触发 componentWillMount 会有一定延时。因此一些网络请求可以提前到发起跳转前一刻去请求

Taro 提供了` componentWillPreload` 钩子，它接收页面跳转的参数作为参数。可以把需要预加载的内容通过 return 返回，然后在页面触发 componentWillMount 后即可通过 this.$preloadData 获取到预加载的内容。

```js
class Index extends Component {
  componentWillMount () {
    console.log('isFetching: ', this.isFetching)
    this.$preloadData
      .then(res => {
        console.log('res: ', res)
        this.isFetching = false
      })
  }

  componentWillPreload (params) {
    return this.fetchData(params.url)
  }

  fetchData () {
    this.isFetching = true
    ...
  }
}
```



### 在Taro 中使用 Redux

Redux 是 JavaScript 状态容器，提供可预测的状态管理。一般来说，规模比较大的小程序，其页面状态和数据缓存等都需要管理很多的东西，这时候引入 Redux 可以方便的管理这些状态，`同一数据，一次请求，应用全局共享`

首先创建 `store` `reducers` `actions`三个文件夹及index.js 作为入口文件

先看下store的入口文件index.js

```js
// store/index.js

import { createStore, applyMiddleware } from 'redux'

// 引入需要的中间件

import thunkMiddleware from 'redux-thunk'
import { createLoggor } from 'redux-logger'

// 引入根 reducer

import rootReducer from '../reducers'

const middlewears  = [
  thunkMiddleware,
  createLoggor()
]

// 创建 store

export dafault function configStore(){
    const store = createStore(rootReducer,applyMiddleware(...middlewears))
    return store
}
```

创建好了 store.js 在app.js 中引入 使用 @tarojs/redux中提供的 Provider组件将store接入应用，这样的话，被Provider包裹的页面都能访问到应用的 store

> Provider 组件使组件层级中的connct() 方法都能获取到 Redux store

```js
//app.js

import Taro, { Component } from '@tarojs/taro'
import { Provider} from '@tarojs/redux'

import configStore from './store'
import Index from './pages/index'

import './app.scss'

const store = configStore()

class App extends Component{
    ...
    ...
    
    render(){
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        )
    }
}
```

新建constants文件夹来定义一些action type 常量。

```js
export const MYCONTS = 'MYCONTS'
```

然后创建这个指令的`reducer`

```js
import { combineReducers } from 'redux'
import { MYCONTS } from '../constants/index.js'

//定义初始化state
const INITIAL_STATE = {
    todo:{}
}

function todo (state = INITIAL_STATE,action){
    switch (action.type){
        case MYCONTS:
        return {
            ...state,
            todo:{} //处理这个变量的操作，通过action获取数据
        }
        default:
        return state
    }
}

//combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore

export default combineReducers({ 
    todo
})
```

接着在action中定义函数reducer函数对用的指令

```js
//src/action/index.js

import { MYCONTS } from '../constants/index.js'

export const myconts = (data) => {
  return {
    data,
    type: MYCONTS
  }
}
```

完成上述三个步骤之后，就可以在应用中使用响应的action获取或者更改state了







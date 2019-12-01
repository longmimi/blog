---
sidebar: auto
prev: false
---

<img src="https://s2.ax1x.com/2019/07/08/ZsUpxP.md.png" />

<script>
  window.onscroll = function() {
  //为了保证兼容性，这里取两个值，哪个有值取哪一个
  //scrollTop就是触发滚轮事件时滚轮的高度
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var Dom = document.querySelector('img')
  var value =  Math.abs(1-scrollTop/300) > 1 ? 1: Math.abs(1-scrollTop/300)
  console.log(value)
  Dom.style.opacity= value
  // Dom.style.brightness = 0
  Dom.style.transform = `scale(${value}`
}
</script>

> 不积跬步 无以至千里

## JavaScript

* [节流和防抖](/frontend/javascript/debounce-throttle.md)     :heavy_check_mark:

* [Promise 实现原理](/frontend/javascript/promise.md)   

* [动手实现系列](/frontend/javascript/write-self.md)   

* [Event Loop]()

* [ cookie整理 ](/memo/cookie.md)

---

## Taro

* [Taro初见 | 基础使用](/frontend/taro/taro-init.md)  :heavy_check_mark:

* [Taro探索 | 实现原理](/frontend/taro/taro-forward.md) 

* [Taro实战 | 实战开发](/frontend/taro/taro-use.md)  

---


## React

* [React-Router 原理]() 

* [React 高阶组件及应用](/front/react/react-HOC.md) 

---

## Typescript 

* [Typescript | 基础知识](/frontend/typescript/index.md)

* [Typescript | 实践 - 重构axios ]()

## 设计模式

* [中介者模式]()

## Webpack

* [webpack | 基础配置](/frontend/webpack/webpack-base.md)  :heavy_check_mark: 

* [webpack | 优化](/frontend/webpack/webpack-optimize.md)   :heavy_check_mark:



## Git

* [git如何撤销](/memo/git.md)


## 踩坑日记 

[踩自己的坑 让别人无坑可踩](/solve/index.md)




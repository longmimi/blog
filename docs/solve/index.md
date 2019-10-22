---
sidebar: auto
prev: false
---

#  踩自己的坑  让别人无坑可踩  🈚️



> 不定时，偶尔的，记录一下自己遇到的坑

2019.6.5

## 1. IOS9系统中，在文档未加载完之前window.innerWidth获取的宽度是980，这个和iphone的型号无关。

**场景**

以750单位的UI稿为例，使用rem作为页面的单位，在监听[DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)事件触发之后，设置根元素的fontSize为`window.innerWidth / 7.5 / fontSize * 100 + "%"`发现页面错乱。

**解决**

在head中加入
```html
 <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, shrink-to-fit=no">
```
起作用的是 `shrink-to-fit=no`，可以在ios9系统中使网页的宽度自动适应手机屏幕的宽度。

2019.10.15

##  2.favicon.ico导致页面导致页面重定向问题

**场景**

页面中未设置favicon,也就是浏览器标签页和用于收藏夹的icon,浏览器会默认加载根目录下路径，而恰巧我们服务器的根目录并没有放这张图片（本来有的，估计误删了），nginx对我们的域名做了拦截，并重定向到公司的官网主页。这就导致部分手机进入页面时被重定向了。icon

**解决**

加入了 
```js
<link rel="shortcut icon" href="images/icon.ico" type="image/x-icon" />   
```
并保证服务器根目录有这张图片。


---
sidebar: auto
prev: false
next: ./git.md
---


> cookie平时一直在用，但是一直没深入学习过，今天总结一下。

## 什么是cookie

HTTP Cookie（也叫 Web Cookie或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。因为HTTP协议无状态的，即服务器无法知道用户的身份，通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。

## cookie的机制

当用户首次进入访问页面，设置cookie会经历以下步骤：

* 客户端发送一个请求到服务器 
* 服务器发送一个HttpResponse响应到客户端，其中包含Set-Cookie的头部(为客户端写入cookie) 
* 客户端保存cookie，之后向服务器发送请求时，HttpRequest请求中会包含一个Cookie的头部 
* 服务器返回响应数据

## cookie的属性

在浏览器的控制台中，可以直接输入：document.cookie来查看cookie。cookie是一个由键值对构成的字符串，每个键值对之间是“; ”即一个分号和一个空格隔开。

==注==：注意，document.cookie 只能获取非 HttpOnly 类型的cookie

### Name

唯一确定cookie的名称，不区分大小写.是cookie的必选项。存储时需要使用encodeURIComponent() 编码，获取的时候需要decodeURIComponent()解码。（因为cookie要在httpp请求过程中传输，所以需要编码）

### Value

cookie的值，



### Expires

http/1.0协议中的属性。表示cookie失效日期，Expires必须是 GMT 格式的时间（可以通过 new Date().toGMTString()或者 new Date().toUTCString() 来获得),以毫秒为单位，值是一个时间点，即cookie的失效时间=Expires

### Max-Age

http/1.1协议中的属性，用来代替Expires。值是一个时间段，以秒为单位。即cookie的失效时间=创建时刻+Max-Age。这个属性有三个值（正值，负值，0），默认值为-1，即有效期为session.负数：有效期session；0：删除cookie；正数：有效期为创建时刻+ Max age


==注==：若 Expires 和 Max-Age同时设置，则Max-Age生效，同时设置为了兼容http/1.0


### Domain

定义可以访问该cookie的域名，配合Path使用

### Path

定义网站上可以访问该属性的域名，默认为产生cookie的路径，如果设置为 / ，则代表所有该域名下的页面都可以访问这个cookie.


### httpOnly

这个选项用来设置cookie是否能通过 js 去访问。默认情况下，cookie不会带httpOnly选项(即为空)，所以默认情况下，客户端是可以通过js代码去访问（包括读取、修改、删除等）这个cookie的。当cookie带httpOnly选项时，客户端则无法通过js代码去访问（包括读取、修改、删除等）这个cookie。在客户端是不能通过js代码去设置一个httpOnly类型的cookie的，这种类型的cookie只能通过服务端来设置。另外，设置了这个属性，document.cookie在控制台也获取不到这个cookie

### Secure

当使用https协议的时候，该cookie才会传输至服务器,默认false

### Size

cookie的大小，每个域名下cookie限制大小4Kb

> 附上cookie常用操作的方法

```js
// setCookie()
// @About 设置cookie
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

// getCookie()
// @About 获取cookie
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return (arr[2]);
    } else {
        return "";
    }
}

// delCookie()
// @About 删除cookie
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}
```






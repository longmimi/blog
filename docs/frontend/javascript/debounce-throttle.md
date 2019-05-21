---
sidebar: auto
prev: false
---

# 节流throttle 和 防抖 debounce
> **什么是防抖和节流？有什么区别？如何实现？**

**防抖是将多次执行变为一次执行   节流是将多次执行变为间隔执行**

## 1. 防抖

触发高频事件后N秒内只会执行一次，若n秒内再次触发，则重新计算时间

思路：每次触发事件时都取消之前的延时调用方法

```js
function debounce(cb,delay,...args){
    let timeout = null //存储定时器返回值
    return (e)=>{
        if(timeout){
            clearTimeout(timeout);//每次触发就清除前一个定时器
        }
        timeout = setTimeou(()=>{ //创建一个新的定时器，保证在时间间隔内fn不会执行
            cb.apply(this,[e,...args])
            clearTimeout(timeout);
            timeout = null
        },delay)
    }
}

function success(){
    console.log('防抖')
}

ele.addEEventListener('input',debounce(success,500))
```

eg. 鼠标停止滚动500ms后执行回到函数fn

```js
window.onscroll = debounce(fn,500,args1,args2)
```

带有立即执行功能的防抖函数

```js
function now(){
    return new Date()
}

/* 防抖函数 返回函数连续调用时，必须时间间隔大于某一值，才会执行
 *
 *@param {function} func            回调函数
 *@param {number}   wait            时间间隔
 *@param {boolean}  immedaite       是否立即调用函数
*/

function debounce(fn,wait=50,immdiate=true){
    let timer,context,args;
    
    //延时执行函数
    const later = () => setTimeout(()=>{
        //延时函数执行完毕，清空缓存的定时器序号
        timer = null
        //延时执行的情况下，函数会在延迟函数中执行
        //使用到之前缓存的参数和上下文
        if(!immdiate){
            func.apply(context,args)
            context = args = nulll
        }
    },wait)
    
    return function(...params){
        //如果没有创爱你延迟执行函数later，创建一个
        if(!later){
            timer = later()
            //如果是立即执行，调用函数
            //否则缓存参数和上下文
            if(immdiate){
                func.apply(context,args)
            }else{
                context = this
                agrs = params
            }
        }else{
            //如果已经有延迟执行函数，调用时候清除原来的并重新设定一个
            //此时延迟执行函数会重新计时
            claerTimeout(timer)
            timer = later()
        }
    }
}

```

## 2. 节流


高频事件触发，n秒内只会执行一次，节流相当于稀释函数的执行频率

思路：

* 每次触发事件时都判断当前是否有等待执行的延时函数
* 利用时间戳判断执行间隔是否大于设置的时间间隔

1.设置时间戳

当触发事件的时候，拿到当前时间戳-之前的时间戳（最初为0）,如果大于时间间隔，那么久执行函数，然后更新时间戳为当前时间戳，否则不执行
```js
function throttle(func,wait){
    let context,args,previous=0;
    
    return function(){
        let now = new Date()
        context = this
        args = arguments
        if(now-previous>wait){
            func.apply(context,args)
            previous = now;
        }
    }
}

```

2.使用定时器

当触发事件的时候，设置一个定时器，再出发事件的时候，如果定时器存在，则不执行，一直到定时器执行结束，执行函数之后清空定时器

```js
function throttle(func,wait){
    let timeout=null
    let previous=0
    
    return  function(){
        context=this
        args=arguments
        if(!timeout){
            timeout=setTimeout(function(){
                timeout=null
                func.apply(context,args)
            },wait)
        }
    }
    
}
```

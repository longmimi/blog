---
sidebar: auto
prev: ./debounce-throttle
---


> 自己动手实现一些常用方法api,增加理解。

## bind

## call

## apply

## 数组扁平化

* 递归
```js

function flatten(){
  let res = []
  res.map(item=>{
    if(Array.isArray(item)){
      res.concat(flatten(item))
    }else{
      res.push(item)
    }
  })
  return res
}
```
* 拓展运算符

es6的扩展运算符能将二维数组变为一维

```js
let arr = [1, 2, 3, [4, 5]]
function flatten(arr){
  while(arr.map(item=>Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
}
consolr.log(flatten(arr))

```

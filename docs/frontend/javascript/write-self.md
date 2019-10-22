---
sidebar: auto
prev: ./debounce-throttle
---
  
> 自己实现一些常用方法和api,增加理解。

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
console.log(flatten(arr))
```

## instanceof 

核心：向上查找原型链
```js
function myInstanceof(target,reference){
  if(typeof target !== 'object' || target === null) return false;
  //getProtypeOf能够拿到参数的原型对象
  let proto = Object.getProtoypeOf(target);
  white(1){
    //在原型链顶部没找到
    if(proto === null) return false;
    //找到相同的原型对象
    if(target === reference.prototype) return true;
    proto = Object.getPrototypeof(proto);
  }
}

eg:
console.log(myInstanceof("111", String)); //false
console.log(myInstanceof(new String("111"), String));//true
```

## bind

## call

## apply




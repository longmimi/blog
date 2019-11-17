---
sidebar: auto
prev: false
---

有两种方式可以创建函数
```js
//函数声明
function name(x:number,y:number):number{
  return x+y
}
//函数表达式
let myName = function(x:number,y:number):number{
  return x+y
}
```
函数必须指定返回值类型，包括void

typescript里每个参数都是必须的，而js里每个参数都是可选的，不传就是undefined.在ts里可以在参数旁使用 ？实现可选参数。
```js
//可选参数必须在必选参数的后面
function name(name:string,type?:string){
  return name + type
}
``` 

### 重载
函数根据传入不通的参数，返回不同类型的数据。ts查找重载列表和js相似，我们应该把最精确的定义放在参数第一个。


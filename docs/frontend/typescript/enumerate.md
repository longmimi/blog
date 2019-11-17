---
sidebar: auto
prev: false
---

## 枚举

ts支持数字和基于字符串的枚举。

```js
//后面的值被从1递增
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

枚举成员的值可以是常量 或者 计算 出来。

* 枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0
```js
enum E { X } //X 
```
* 它不带有初始化器且它之前的枚举成员是一个 数字常量
```js
enum E {  A = 1, B, C } 
```
除了创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 反向映射，从枚举值到枚举名字

```js
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
```

const 枚举 避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问
```js
const enum Enum {
    A = 1,
    B = A * 2
}
```



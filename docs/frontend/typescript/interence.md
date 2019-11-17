---
sidebar: auto
prev: false
---

## 类型推论

类型是在哪里如何被推断的

```js
let X = 1
```
变量X会被推断为 数字类型。
```js
let x = [0, 1, null];
```
候选的类型有 数字和 null。

当候选类型不能推断出类型的时候，需要声明类型。
```js
let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
```

ts也可以按照上下文环境进行类型推论：上下文归类。

```js
window.onmousedown = function(mouseEvent: any) {
    console.log(mouseEvent.button);  //<- Now, no error is given
};
```
根据window.onmousedown的函数类型推论出右边函数表达式的类型。

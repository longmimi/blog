---
sidebar: auto
prev: false
---


## 安装

` npm install -g typescript `

打开编辑器，新建demo.ts文件，输入
```js
function tsFunc(person){
    return 'Hi' + person
}

let user = "longtean";

document.body.innerHTML = greeter(user);
```

接着打开命令行，输入 `tsc demo.ts`, 就可以将ts文件编译成js文件。


## 类型注解
ts里的类型注解是一种轻量级的为函数或变量添加约束的方式。如果希望函数接受某种类型的参数，可以这么写：
```js
function tsFunc(person: string){
    return 'Hi' + person
}
```
当你给这个函数传入了其他类型的参数并进行编译，就会报错提示传入的参数类型不符。同样，如果没有传递参数给函数，编译也会报错，提示传入非期望个数的参数。这是因为ts提供了静态的代码分析，可以分析代码结构和提供的类型注解。

## 基础类型

ts支持与js几乎相同的数据类型，此外提供了 `枚举类型`

### 布尔值

```js
let isDone : boolean = false
```
### 数字类型
```JS
let _number :number = 123; 
```
### 字符串
```js
let _string :string = 'longtean'
```
### 数组
有两种方式可以定义数组
```js
let _arraylist :number[] = [1,2,3]
//或者使用数组泛型
let list :Array<number> = [1,2,3]
```
### 元组Tuple
元组类型表示一个已知元素数量和类型的数组，各元素的类型不必相同。
```js
let x: [string, number]
x = ['hello', 10]; // OK 
x = [10, 'hello']; // Error
```
### 枚举 enum
enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。


```js
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
//枚举类型的便利是可以由枚举的值得到名字。
enum Color { red=1,green,blue}
let colorName : string  = Color[2]
console.log(colorName) //green

```
### any

```js
let value : any = 4;
value =='aaaaa';
value = false;
```
### void 
某种意义上说void和any相反 表示没有任何类型。
只能被赋值  undefined 和 null

### null undefined
是所有类型的子类型

### never

```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed")
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}
```

### object
非原始类型，除 `number`，`string`，`boolean`，`symbol`，`null`或`undefined` 之外的类型

### 类型断言
等于是告诉编译器，可以跳过类型判断 ，表明开发者了解当前类型

有两种形似。
```js 
//尖括号 语法
let someValue : any = 'tetsas'
let strLength : number = (<string>someValue).length
```
```js
// as 语法
let someValue : any = 'sdjijfa'
let strLength : number = (someValue as string).length

```
注 ： 在ts中使用jsx  只有as语法被允许





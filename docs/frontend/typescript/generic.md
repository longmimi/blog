---
sidebar: auto
prev: false
---

## 泛型

先写一个普通的函数
```js
function identity(arg: any): any {
    return arg;
}
```
any类型并不能保证传入的参数和返回类型是统一类型，这时候需要使用类型变量。
```js
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity : <T>(arg:T) => T = identity

//使用不同泛型参数名
let myIdentity : <U>(arg:U) => U = identity

//使用带有调用签名的对象字面量来定义泛型函数
let myIdentity: {<T>(arg: T): T} = identity;
```
上面的这个函数，就叫做泛型，可以接受任意类型参数，但又可以约束参数和返回值类型。

有两种方法可以使用泛型函数。
```js
//传入所有的参数，明确指定T的类型
let output = identity<string>("myString");
//使用类型推论，编译器会根据传入的参数推论T的类型
let output = identity("myString");
```
### 泛型接口

```js
interface genericIdentityFn {
    <T>(arg:T) : T
}

function identity<T>(arg:T) : T {
    return arg;
}

let myIdentity : genericIdentityFn = identity
```

### 泛型类

```js
class GenericNumber<T> {
    value : T,
    func : ( x:T, y:T) => T
}

let myGenericNumber = new GenericNumber<number>();
```
### 泛型约束
定义一个接口来约束泛型
```js
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity(3); // error 数字没有.length
loggingIdentity({length: 10, value: 3});
```
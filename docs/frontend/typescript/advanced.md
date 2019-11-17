---
sidebar: auto
prev: false
---

## 高级类型


### 交叉类型 &

是将多个类型合并为一个类型，就包含了所需要的所有类型特性。

```js
class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}

let result = new Person('fk') & new ConsoleLogger('fu')
```

### 联合类型 | 

只能访问所有类型的共有成员

```js
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors
```

### 类型保护机制

联合类型只能获取共有的成员，访问其他成员就会报错。当然我们可以添加类型断言来防止报错。

```js
let pet = getSmallPet();

// 每一个成员访问都会报错
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
//为了让这段代码工作，我们要使用类型断言：
let pet = getSmallPet();

if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}
```

可以通过类型保护来解决上面使用类型断言的问题。

要定义一个类型保护，只需定义一个函数，返回一个 类型谓词。
格式： paramsName is type

```js
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}

//这段代码就变成了

if (isFish(pet)) {
    pet.swim(); //pet 是 Fish 类型
}
else {
    pet.fly(); // pet 不是Fish类型
}

```

 #### typeof 类型保护

 有两种格式可以被识别被当做类型保护。
 * typeof v === 'typename'
 * typeof v !== 'typename'

 ```js
 function isNumber(x: any): x is number {
    return typeof x === "number";
} 

//等价于

typeof x === 'number'

 ```

 #### instanceof 类型保护



 ```js
 class Foo {
  foo = 123;
  common = '123';
}

class Bar {
  bar = 123;
  common = '123';
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  }
  if (arg instanceof Bar) {
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}

doStuff(new Foo());
doStuff(new Bar());
 ```
#### in 

in 操作符可以安全的检查一个对象上是否存在一个属性，通常也被当做类型保护使用。

```js
interface A {
  x: number
}

interface B {
  y: string 
}

funciton stuff(q: A | B){
  if( 'x' in A){
    //q:A
  }else {
    //q:B
  }
}
```

#### 可选参数和属性

使用了 --strictNullChecks，可选参数会被自动地加上 | undefined:

`identifier!`从 identifier的类型里去除了 `null`和 `undefined`


### 类型别名

类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。

```js
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
```

泛型的类型别名

```js
type Container<T> = { value: T };

//类型别名不能出现在 声明右侧的任何地方
type Yikes = Array<Yikes>; // error
```


### 接口和类型别名

接口创建了一个新的名字，可以在其他地方任意使用。
类型别名只是对现有类型的引用，不创建新的名字。
类型别名不能被 extends和 implements，因为你不能去修改一个现有的类型吧。

### 索引类型

使用索引类型，编辑器就可以检查使用了动态属性名的代码。
```js
funciton pluck<T,K extends keyof T>(o:T,names:K[]):T[K]{
  return names.map(n=>o[n])
}

interface Person {
  name: string;
  age: number
}

let person :Person = {
  name : 'long',
  age: 24
}
let strings: string[] = pluck(person,['name']) //ok,string[]
```

* keyof T 是 索引类型查询操作符。 表示T上已知的公共属性名称的联合
```js
let personProps: keyof Person // 'name' | 'age'
```

* T[K] 索引访问操作符

通过索引访问到实例

### 映射类型 

从旧类型中创建新类型的一种方式：新类型以相同的形式去转换旧类型里每个属性。

```js
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
type Partial<T> = {
    [P in keyof T]?: T[P];
}

// 使用
type PersonPartial = Partial<Person>;
type ReadonlyPerson = Readonly<Person>;

type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };

等同于

type Flags = {
    option1: boolean;
    option2: boolean;
}

```



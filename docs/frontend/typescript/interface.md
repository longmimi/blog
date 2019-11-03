## 接口 interface

我理解的接口就是类型注解的集合，用接口来描述一个对象的属性。在ts里，只要两个类型内部的接口可以兼容，那这两个类型就可以兼容。这就允许我们在实现接口的时候包含接口需要的结构就可以，不必实现所有的结构。
```js
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
```
### 可选属性

接口里的属性不都是必须的。
```js
interface SquareConfig {
    color?: string;
    width?: number
}

function createSquare(config:SquareConfig) :{color:string;area:number}{
    let newSquare = { color: 'white',area:100};
    if(config.color){
        newSquare.color = config.color
    }
    if (config.width) {
    newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color:'blue'})
```
### 只读属性
一些对象属性只能在对象刚刚创建时修改值， readonly 指定
```js
// 赋值之后，就不能被修改
interface Point{
    readonly x:number;
    readonly y:numbet;
}
let p1:Point = {x:10,y:11};
p1.x = 5 // error
```

TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。
```js
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
// ReadonlyArray赋值给普通数组也不行，可以使用类型断言重写
a = ro as number[]
```
### 函数类型
接口描述函数类型
```js
interface searchFunc{
    (source:string,subString:string) :boolean
}
```

### 可索引类型
具有一个索引签名，描述对象索引的类型，和相应索引返回值类型
```js
interface StringArray{
    [index:number]:string
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
```
::: tip
索引签名可以使用 字符串和数字，但数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象
:::

### 类类型
在接口中描述一个方法，在类里实现它.

### 继承接口
接口和类一样 可以继承，从一个接口里复制成员到另一个接口里。
```js
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```
### 混合类型
一个对象可以同时做为函数和对象使用，并带有额外的属性。
```js
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```
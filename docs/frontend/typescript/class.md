---
sidebar: auto
prev: false
---

## 类

ts支持基于类的面向对象编程，类和接口可以一起工作。
新建一个带有构造函数和属性的 Student 类。
```js
class Student{
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");
```
::: tip
注：在构造函数的参数上使用public等同于创建了同名的成员变量。
:::

### 修饰符

* public 默认
* private 私有 类外不可访问
* protected 在子类中仍可访问
* readonly 必须在声明时或构造函数里被初始化

### 存储器

ts可以通过getters/setters来截取对对象成员的访问，这是一个把类改写成get和set的例子。
```js
class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        this._fullName = newName;
    }
}
```

### 抽象类

抽象类做为其它派生类的基类使用。使用abstract 关键字定义抽象类和抽象方法。
不能创建一个抽象类的实例，但是允许创建一个对抽象类型的引用，也允许对一个抽象子类进行实例化和赋值
```js
abstract class Department {
    constructor(public name: string) {
    }
    abstract printMeeting(): void; // 必须在派生类中实现
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
}
let department: Department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
```

定义一个类，会创建一个类的实例和构造函数

### 把类当接口使用
```js
class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}
let point3d: Point3d = {x: 1, y: 2, z: 3};
```


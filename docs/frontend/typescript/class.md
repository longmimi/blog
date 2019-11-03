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
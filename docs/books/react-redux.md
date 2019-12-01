> 主要记录一些书中比较经典的例子和自己的感悟。

## 第二章 设计高质量的React组件

##### 1.componentWillReceiveProps 


componentWillReceiveProps(nextProps)不论父组件传递给子组件的props有无发生改变，都会触发子组件的componentWillReceiveProps函数，只要父子组件的render调用了，在render里面的被渲染的子组件都会经历更新过程。



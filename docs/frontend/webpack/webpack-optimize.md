---
sidebar: auto
prev: ./webpack-base
---

# webpack优化

## noParse

wekpack的module有一个 noParse 属性，可以设置不解析引入库的依赖


```js
  module.exports = {
    module:{
      noParse:/jquery/  //不解析jquery的依赖 
    }
  }
```
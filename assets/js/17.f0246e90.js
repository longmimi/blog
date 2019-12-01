(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{200:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"taro基础使用及注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taro基础使用及注意","aria-hidden":"true"}},[t._v("#")]),t._v(" Taro基础使用及注意")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://taro.aotu.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taro"),a("OutboundLink")],1),t._v("是京开源的一套遵循 React 语法规范的多端统一开发框架，经过一段时间的学习使用，总结下基础使用")])]),t._v(" "),a("h2",{attrs:{id:"与react的差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与react的差异","aria-hidden":"true"}},[t._v("#")]),t._v(" 与React的差异")]),t._v(" "),a("p",[t._v("由于微信小程序的限制，React 中某些写法和特性在 Taro 中还未能实现")]),t._v(" "),a("blockquote",[a("p",[t._v("暂不支持在 render() 之外的方法定义 JSX")])]),t._v(" "),a("p",[t._v("由于微信小程序的 template 不能动态传值和传入函数，Taro 暂时也没办法支持在类方法中定义 JSX")]),t._v(" "),a("p",[t._v("方案： render中定义")]),t._v(" "),a("blockquote",[a("p",[t._v("不能在包含 JSX 元素的 map 循环中使用 if 表达式")])]),t._v(" "),a("p",[t._v("方案：尽量在 map 循环中使用条件表达式或逻辑表达式")]),t._v(" "),a("blockquote",[a("p",[t._v("不能使用 Array.map 之外的方法操作 JSX 数组")])]),t._v(" "),a("p",[t._v("Taro 在小程序端实际上把 JSX 转换成了字符串模板，而一个原生 JSX 表达式实际上是一个 React/Nerv 元素(react - element)的构造器，因此在原生 JSX 中你可以对任何一组 React 元素进行操作。但在 Taro 中你只能使用 map 方法，Taro 转换成小程序中 wx:for")]),t._v(" "),a("p",[t._v("方案：先处理好需要遍历的数组，然后再用处理好的数组调用 map 方法")]),t._v(" "),a("blockquote",[a("p",[t._v("不能在 JSX 参数中使用匿名函数")])]),t._v(" "),a("p",[t._v("使用 bind 或 类参数绑定函数")]),t._v(" "),a("blockquote",[a("p",[t._v("不能在 JSX 参数中使用对象展开符")])]),t._v(" "),a("p",[t._v("微信小程序组件要求每一个传入组件的参数都必须预先设定好，而对象展开符则是动态传入不固定数量的参数。所以 Taro 没有办法支持该功能")]),t._v(" "),a("p",[t._v("方案：将需要传递的参数自行传递")]),t._v(" "),a("blockquote",[a("p",[t._v("不允许在 JSX 参数（props）中传入 JSX 元素")])]),t._v(" "),a("p",[t._v("由于微信小程序内置的组件化的系统不能通过属性（props） 传函数，而 props 传递函数可以说是 React 体系的根基之一，Taro 自己实现了一套组件化系统。而自制的组件化系统不能使用内置组件化的 slot 功能。两权相害取其轻，只能暂时不支持该功能")]),t._v(" "),a("p",[t._v("方案：通过 props 传值在 JSX 模板中预先判定显示内容，或通过 props.children 来嵌套子组件。")]),t._v(" "),a("blockquote",[a("p",[t._v("不支持无状态组件（Stateless Component)")])]),t._v(" "),a("p",[t._v("由于微信的 template 能力有限，不支持动态传值和函数，Taro 暂时只支持一个文件只定义一个组件。为了避免开发者疑惑，暂时不支持定义 Stateless Component")]),t._v(" "),a("h2",{attrs:{id:"最佳编码方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳编码方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 最佳编码方式")]),t._v(" "),a("p",[t._v("目前 Taro 在微信小程序端是采用依托于小程序原生自定义组件系统来设计实现 Taro 组件化的，所以目前小程序端的组件化会受到小程序原生组件系统的限制，而同时为了实现以 React 方式编写代码的目标，Taro 本身做了一些编译时以及运行时的处理，这样也带来了一些值得注意的约束")]),t._v(" "),a("h3",{attrs:{id:"自定义组件样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件样式","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义组件样式")]),t._v(" "),a("p",[t._v("微信小程序的 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义组件样式"),a("OutboundLink")],1),t._v("默认是不受外部样式影响的。，如果在页面中引入了自定义组件，然后直接写样式是不生效的")]),t._v(" "),a("h3",{attrs:{id:"给组件设置-defaultprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给组件设置-defaultprops","aria-hidden":"true"}},[t._v("#")]),t._v(" 给组件设置 "),a("code",[t._v("defaultProps")])]),t._v(" "),a("p",[t._v("在微信小程序端的自定义组件中，只有在 "),a("code",[t._v("propertries")]),t._v("中制定的属性，才能从父组件传入并接收\n而在Taro中，对于组件代码中使用到的来自 "),a("code",[t._v("props")]),t._v("的属性，会在编译时识别并加入到编译后的"),a("code",[t._v("propertries")]),t._v("中，但是可能会有某一属性没有使用而直接传给子组件，这种情况在编译时处理不到的，因此需要在写代码时给组件设置默认属性")]),t._v(" "),a("p",[t._v("组件设置的 "),a("code",[t._v("defaultProps")]),t._v(" 会在运行时用来弥补编译时处理不到的情况，里面所有的属性都会被设置到 "),a("code",[t._v("properties")]),t._v(" 中初始化组件，正确设置 "),a("code",[t._v("defaultProps")]),t._v(" 可以避免很多异常的情况的出现。")]),t._v(" "),a("h3",{attrs:{id:"组件传递函数属性名以-on-开头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件传递函数属性名以-on-开头","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件传递函数属性名以 "),a("code",[t._v("on")]),t._v(" 开头")]),t._v(" "),a("p",[t._v("父组件往子组件传递函数，必须以 on  开头")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("CustomComponents onMyEvent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("CustomComponents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("因为在微信小程序端组件化是不能直接传递函数类型给子组件的，Taro是借助"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件机制"),a("OutboundLink")],1),t._v("来实现的，在小程序中传入事件时属性名写法为 bindevent 或者 bind:event")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 当自定义组件触发“myevent”事件时，调用“onMyEvent”方法 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name bindmyevent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onMyEvent"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 或者可以写成 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("myevent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onMyEvent"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("和内置组件的绑定事件写法保持一致")]),t._v(" "),a("h3",{attrs:{id:"小程序端不要在组件中打印传入的函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序端不要在组件中打印传入的函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序端不要在组件中打印传入的函数")]),t._v(" "),a("h3",{attrs:{id:"小程序端不要将在模板中用到的数据设置为-undefined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序端不要将在模板中用到的数据设置为-undefined","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序端不要将在模板中用到的数据设置为 undefined")]),t._v(" "),a("p",[t._v("小程序中不允许将data中value设置为 "),a("code",[t._v("undefined")]),t._v(" ,在setState时避免这么使用，用null代替")]),t._v(" "),a("h3",{attrs:{id:"小程序端不要在组件中打印-this-props-children"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序端不要在组件中打印-this-props-children","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序端不要在组件中打印 this.props.children")]),t._v(" "),a("p",[t._v("小程序端是通过"),t._t("default"),t._v(" 来实现往自定义组件中传递元素的， Taro利用 this.props.children 在编译h是实现了这一功能，在编译时直接将 this.props.children 编译成"),t._t("default"),t._v(" 标签，在小程序中是语法糖的存在")],2),t._v(" "),a("h3",{attrs:{id:"组件属性传递注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件属性传递注意","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件属性传递注意")]),t._v(" "),a("p",[t._v("不要以 "),a("code",[t._v("id")]),t._v("、"),a("code",[t._v("clas")]),t._v("s、"),a("code",[t._v("styl")]),t._v(" 作为自定义组件的属性与内部 "),a("code",[t._v("state")]),t._v(" 的名称，因为这些属性名在微信小程序中会丢失")]),t._v(" "),a("h3",{attrs:{id:"组件-stat-与-prop-里字段重名的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件-stat-与-prop-里字段重名的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件 "),a("code",[t._v("stat")]),t._v(" 与 "),a("code",[t._v("prop")]),t._v(" 里字段重名的问题")]),t._v(" "),a("p",[t._v("不要在 "),a("code",[t._v("state")]),t._v(" 与"),a("code",[t._v("props")]),t._v(" 上用同名的字段，因为这些被字段在微信小程序中都会挂在 "),a("code",[t._v("data")]),t._v(" 上")]),t._v(" "),a("h3",{attrs:{id:"小程序中页面生命周期-componentwillmount-不一致问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序中页面生命周期-componentwillmount-不一致问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序中页面生命周期 componentWillMount 不一致问题")]),t._v(" "),a("p",[t._v("由于微信小程序里页面在 "),a("code",[t._v("onLoad")]),t._v(" 时才能拿到页面的路由参数，而页面 "),a("code",[t._v("onLoad")]),t._v(" 前组件都已经"),a("code",[t._v("attached")]),t._v(" 了。因此页面的 componentWillMount 可能会与预期不太一致")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误写法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 willMount 之前无法拿到路由参数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" abc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abc\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Custom adc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("abc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确写法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillMount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" abc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abc\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    abc\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 增加一个兼容判断")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("abc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Custom adc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("abc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"组件的-constructor-与-render-提前调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的-constructor-与-render-提前调用","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件的 constructor 与 render 提前调用")]),t._v(" "),a("p",[t._v("在 Taro 编译到小程序端后，组件的 constructor 与 render 默认会多调用一次，表现得与 React 不太一致\n. 这是因为，Taro 的组件编译后就是小程序的自定义组件，而小程序的自定义组件的初始化时是可以指定"),a("code",[t._v("data")]),t._v(" 来让组件拥有初始化数据的。开发者一般会在组件的 "),a("code",[t._v("constructor")]),t._v(" 中设置一些初始化的 "),a("code",[t._v("state")]),t._v("，同时也可能会在"),a("code",[t._v("render")]),t._v(" 中处理 state 与 props 产生新的数据，在 Taro 中多出的这一次提前调用，就是为了收集组件的初始化数据，给自定义组件提前生成 data ，以保证组件初始化时能带有数据，让组件初次渲染正常。")]),t._v(" "),a("p",[t._v("所以，在编码时，需要在处理数据的时候做一些容错处理，这样可以避免在 constructor 与 render 提前调用时出现由于没有数据导致出错的情况")]),t._v(" "),a("h3",{attrs:{id:"js-编码必须用单引号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-编码必须用单引号","aria-hidden":"true"}},[t._v("#")]),t._v(" JS 编码必须用单引号")]),t._v(" "),a("p",[t._v("在 Taro 中，JS 代码里必须书写单引号，特别是 JSX 中，如果出现双引号，可能会导致编译错误")]),t._v(" "),a("h3",{attrs:{id:"环境变量-process-env-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量-process-env-的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境变量 "),a("code",[t._v("process.env")]),t._v(" 的使用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误写法，不支持")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确写法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"预加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 预加载")]),t._v(" "),a("p",[t._v("在微信小程序中，从调用 ·Taro.navigateTo"),a("code",[t._v("、")]),t._v("Taro.redirectTo"),a("code",[t._v("或")]),t._v("Taro.switchTab` 后，到页面触发 componentWillMount 会有一定延时。因此一些网络请求可以提前到发起跳转前一刻去请求")]),t._v(" "),a("p",[t._v("Taro 提供了"),a("code",[t._v("componentWillPreload")]),t._v(" 钩子，它接收页面跳转的参数作为参数。可以把需要预加载的内容通过 return 返回，然后在页面触发 componentWillMount 后即可通过 this.$preloadData 获取到预加载的内容。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Index")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillMount")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'isFetching: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isFetching"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$preloadData\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'res: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isFetching "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillPreload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchData")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isFetching "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"在taro-中使用-redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在taro-中使用-redux","aria-hidden":"true"}},[t._v("#")]),t._v(" 在Taro 中使用 Redux")]),t._v(" "),a("p",[t._v("Redux 是 JavaScript 状态容器，提供可预测的状态管理。一般来说，规模比较大的小程序，其页面状态和数据缓存等都需要管理很多的东西，这时候引入 Redux 可以方便的管理这些状态，"),a("code",[t._v("同一数据，一次请求，应用全局共享")])]),t._v(" "),a("p",[t._v("首先创建 "),a("code",[t._v("store")]),t._v(" "),a("code",[t._v("reducers")]),t._v(" "),a("code",[t._v("actions")]),t._v("三个文件夹及index.js 作为入口文件")]),t._v(" "),a("p",[t._v("先看下store的入口文件index.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// store/index.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" applyMiddleware "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redux'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入需要的中间件")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" thunkMiddleware "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redux-thunk'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createLoggor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redux-logger'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入根 reducer")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rootReducer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../reducers'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" middlewears  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  thunkMiddleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLoggor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 store")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" dafault "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootReducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("middlewears"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" store\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("创建好了 store.js 在app.js 中引入 使用 @tarojs/redux中提供的 Provider组件将store接入应用，这样的话，被Provider包裹的页面都能访问到应用的 store")]),t._v(" "),a("blockquote",[a("p",[t._v("Provider 组件使组件层级中的connct() 方法都能获取到 Redux store")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//app.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Taro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@tarojs/taro'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@tarojs/redux'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" configStore "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./store'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Index "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./pages/index'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app.scss'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Provider store"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("新建constants文件夹来定义一些action type 常量。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MYCONTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MYCONTS'")]),t._v("\n")])])]),a("p",[t._v("然后创建这个指令的"),a("code",[t._v("reducer")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" combineReducers "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redux'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MYCONTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../constants/index.js'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义初始化state")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INITIAL_STATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    todo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("todo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INITIAL_STATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MYCONTS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            todo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//处理这个变量的操作，通过action获取数据")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("combineReducers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    todo\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("接着在action中定义函数reducer函数对用的指令")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//src/action/index.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MYCONTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../constants/index.js'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myconts")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MYCONTS")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("完成上述三个步骤之后，就可以在应用中使用响应的action获取或者更改state了")])])},[],!1,null,null,null);e.options.__file="taro-init.md";s.default=e.exports}}]);
module.exports = {
  title: 'longtean\'s blog',
  base: '/blog/',
  themeConfig: {
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '前端文章',
        link: '/frontend/'
      },
      {
        text: "读书笔记",
        link: '/books/'
      },
      {
        text: "电影记录",
        link: '/movie/'
      },
      {
        text: 'Github',
        link: 'https://www.github.com/longmimi'
      }
    ]
  },
  // sidebar: [
  //   {
  //     title: '目录',   // 必要的
  //     path: '/frontend/',      // 可选的, 应该是一个绝对路径
  //     // collapsable: true, // 可选的, 默认值是 true,
  //     // sidebarDepth: 2,    // 可选的, 默认值是 1
  //     // children: [
  //     // '../../README.md',
  //     // ]
  //   },
  //   {
  //     title: '源码',   // 必要的
  //     // path: '/about/',      // 可选的, 应该是一个绝对路径
  //     collapsable: true, // 可选的, 默认值是 true,
  //     sidebarDepth: 2,    // 可选的, 默认值是 1
  //     children: [
  //     '/sentry/',
  //     '/lodash/',
  //     '/underscore/',
  //     '/jQuery/',
  //     ]
  //   }
  // ],
  serviceWorker: false
}
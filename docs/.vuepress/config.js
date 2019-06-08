module.exports = {
  title: 'longtean\'s blog',
  base: '/blog/',
  themeConfig: {
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: "博客",
        items: [
          {
            text: '前端文章',
            link: '/frontend/'
          },
          {
            text: "电影记录",
            link: '/movie/'
          },
          {
            text: "读书笔记",
            link: '/books/'
          },
          {
            text: "踩坑日记",
            link: '/solve/'
          }
        ]
      },
      {
        text: 'Github',
        link: 'https://www.github.com/longmimi'
      }
    ]
  },
  serviceWorker: false
}
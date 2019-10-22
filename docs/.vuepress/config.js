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
        text: '其他',
        ariaLabel: 'other menu',
        items: [
          {
            text: "读书笔记",
            link: '/books/'
          },
          {
            text: "备忘录",
            link: '/memo/'
          },
          {
            text: "电影记录",
            link: '/movie/'
          },
          {
            text: "踩坑日记",
            link: '/solve/'
          },
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
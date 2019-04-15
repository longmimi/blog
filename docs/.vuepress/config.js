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
            text: '前端',
            link: '/frontend/'
          },
          {
            text: "生活",
            link: '/life/'
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
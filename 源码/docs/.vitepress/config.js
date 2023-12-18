// import { defineConfig } from 'vitepress';

export default ({
  base: '/',
  title: "文档",
  description: "文档",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
//---主题配置---
  themeConfig: {
    logo: { 
      light: '/favicon.ico',
      dark: '/favicon.ico',
      },
    //社交链接
    socialLinks: [ 
      { icon: 'github', link: 'https://github.com/hslr-s/sun-panel' }, 
    ],
    // --------------------------------------------------------------------
    //---导航栏开始---
    nav: [
      { text: '首页', link: '/' },
      { text: '快速部署', link: '/快速部署/' },
      { text: '软件介绍', link: '/软件介绍/' },
    ],
    // --------------------------------------------------------------------
    //---侧边栏开始---
    sidebar: {   
      '/软件介绍/': [
      {
      text: '软件介绍',
        items: [
          { text: '快速部署', link: '/快速部署/' },
          { text: '软件介绍', link: '/软件介绍/' },
          ]
        }
      ],
      '/快速部署/': [
        {
        text: '软件介绍',
          items: [
            { text: '快速部署', link: '/快速部署/' },
            { text: '软件介绍', link: '/软件介绍/' },
            ]
          }
        ],
    },
    // --------------------------------------------------------------------
    outlineTitle: '本页目录',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: '显示详细列表',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    }
  },//---主题配置---
}
)
// import { defineConfig } from 'vitepress';
import AutoConfigureNavSidebarPlugin from '@w3ctech-editorial-department/vitepress-auto-configure-nav-sidebar'

const { nav, sidebar } = AutoConfigureNavSidebarPlugin({
  //现在这个自动导航栏和侧边栏没有办法实现排序，算是缺点之一
  collapsed: false,               //sidebar是否折叠
  isCollapse: false,              //sidebar是否可折叠
  showNavIcon: false,             //显示 nav 修饰
  singleLayerNav: true,           //是否设置单层 nav
  showSidebarIcon: true,          //显示 sidebar 修饰
  filePrefix: '✏️',              //文件前缀修饰，有助于区分
  dirPrefix: '📂',               //目录前缀修饰，有助于区分
  ignoreFolders: ['.vitepress','public'],   //需要排除的一些目录
  ignoreFiles: [''],              //需要排除的一些文件
})

export default ({
  base: '/',
  title: "Sun-Panel",
  description: "Sun-Panel文档",
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
    nav,
    sidebar,
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

// //---导航栏开始---
// nav: [
//   { text: '首页', link: '/' },
//   { text: '快速部署', link: '/快速部署/' },
//   { text: '软件介绍', link: '/软件介绍/' },
// ],
// // --------------------------------------------------------------------
// //---侧边栏开始---
// sidebar: {   
//   '/软件介绍/': [
//   {
//   text: '软件介绍',
//     items: [
//       { text: '快速部署', link: '/快速部署/' },
//       { text: '软件介绍', link: '/软件介绍/' },
//       ]
//     }
//   ],
//   '/快速部署/': [
//     {
//     text: '软件介绍',
//       items: [
//         { text: '快速部署', link: '/快速部署/' },
//         { text: '软件介绍', link: '/软件介绍/' },
//         ]
//       }
//     ],
// },
// // --------------------------------------------------------------------
---
layout: home

hero:
  name: "Sun-Panel"
  text: "简单易用且美观"
  tagline: 服务器、NAS导航面板、Homepage、浏览器首页
  actions:
    - theme: brand
      text: 快速部署
      link: /🥇快速部署/快速部署
    - theme: alt
      text: 关于软件
      link: /🥇软件介绍/软件介绍
  image:
    src: /favicon.ico
    alt: ico

features:
  - title: 简洁
    details: 占用资源小，无需连接外部数据库
  - title: docker部署
    details: 上手简单，免修改代码，局域网内外网链接切换
  - title: 支持网页内置小窗口打开
    details: 丰富图标自由搭配，部分网站屏蔽此功能
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  /* --vp-home-hero-image-background-image: linear-gradient(-45deg, #41d1ff 10%, #bd34fe 10%); */
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
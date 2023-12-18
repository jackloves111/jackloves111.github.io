import DefaultTheme from 'vitepress/theme';
import './index.css';

// 引入图片缩放
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

import { h } from 'vue';
import noticeBoard from './noticeBoard.vue';

// 引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  ...DefaultTheme,
  // 时间线
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  },
  // 自定义组件
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(noticeBoard)
    })
  },
  // 图片缩放
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};


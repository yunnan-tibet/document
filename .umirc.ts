import { defineConfig } from 'umi';

export default defineConfig({
  title: '后台组件库',
  dva: {
    hmr: true,
    immer: true,
  },
  history: {
    type: 'hash',
  },
  // mfsu: {},
  publicPath: './',
  outputPath: 'adminDoc',
});

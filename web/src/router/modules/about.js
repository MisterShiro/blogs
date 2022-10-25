export default [
  {
    path: 'about',
    name: 'about',
    component: () => import('@/views/About/index.vue'),
    alwaysShow: true,
    meta: {
      keepAlive: false, // 是否缓存组件
      title: '关于', // 路由中文名称
    },
  },
];
  
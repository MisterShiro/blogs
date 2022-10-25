import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/Layout/index.vue';
import Error404 from '@/views/Error404';

Vue.use(VueRouter);

// 加载所有模块子路由
const requireContext = require.context('./modules', false, /\.js$/);
let allRouterModules = [];
requireContext.keys().forEach((name) => {
  allRouterModules.push(...(requireContext(name).default || []));
});

const routes = [
  {
    path: '/', // 首页
    name: 'layout',
    redirect: '',
    component: index,
    children:[
      ...allRouterModules, // 注入所有的路由模块
    ]
  },
  {
    path: '/404', // 状态错误页面
    name: '404',
    component: Error404,
  },
  {
    path: '*',
    redirect: '/Error404',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

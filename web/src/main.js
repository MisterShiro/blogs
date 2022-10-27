import Vue from 'vue'
import App from './App.vue'
import store from './store'
//路由配置
import router from './router'
import authGuard from './router/auth-guard'; // 路由守卫

// css
import 'normalize.css'
import '@/styles/index.scss';
// 全局组件
import "@/components/index.js";



Vue.config.productionTip = false

new Vue({
  router,
  store,
  authGuard,
  render: h => h(App)
}).$mount('#app')

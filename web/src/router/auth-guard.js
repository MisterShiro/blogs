// 路由守卫 
import router from './index';
// to是当前页面，from是上一个页面
// 路由跳转前
const beforeEach = router.beforeEach((to, from, next) => {
  // console.log('路由跳转前',to, from);
  document.title = to.meta.title || '夕洛的小窝';
  next();
});
// to是当前页面，from是上一个页面
// 路由跳转后
const afterEach = router.afterEach((to, from) => {
  // console.log('路由跳转后',to, from);
  to,from
});

export default {beforeEach, afterEach};

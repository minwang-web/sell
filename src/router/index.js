import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// import Header from '../components/header/header.vue';
import goods from '../components/goods/goods.vue';
// import ratings from '../components/ratings/ratings.vue';
// import seller from '../components/seller/seller.vue';

Vue.use(VueRouter);

const routes = [
  // 重定向: 从 /a 重定向到 /b; 下面的例子是设置默认路由
  {
    path: '/',
    redirect: '/goods',
  },
  {
    path: '/goods',
    name: 'goods',
    component: goods,
  },
  {
    path: '/ratings',
    name: 'ratings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/ratings/ratings.vue'),
  },
  {
    path: '/seller',
    name: 'seller',
    component: () => import(/* webpackChunkName: "goods" */ '@/components/seller/seller.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 可以通过设置路由的linkActiveClass来设置点击时样式的名字
  linkActiveClass: 'active',
});

export default router;

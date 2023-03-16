import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import VolunteerView from '../views/VolunteerView.vue';
import DonationView from '../views/DonationView.vue';
import MyView from '../views/MyView.vue';

// lazyload 적용
// () => import(/* webpackChunkName: "intro" */'views/intro');

Vue.use(Router);

const router = new Router({
  mode : 'history',
  // base: '/', // only history mode
  routes: [
    { path: '/home', name: 'home', component: HomeView },
    { path: '/volunteer', name: 'volunteer', component: VolunteerView },
    { path: '/donation', name: 'donation', component: DonationView },
    { path: '/my', name: 'my', component: MyView },
  ],
});

// 전역 네비게이션
router.beforeEach((to, from, next) => {
  next();
});

export default router;

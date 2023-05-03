import Vue from 'vue';
import Router from 'vue-router';
import Define from '@/common/define';

import IntroView from '../views/IntroView.vue';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import VolunteerView from '../views/VolunteerView.vue';
import DonationView from '../views/DonationView.vue';
import MyView from '../views/MyView.vue';
import DonationDetailView from '../views/DonationDetailView.vue';
import VolunteerDetailView from '../views/VolunteerDetailView.vue';

// lazyload 적용
// () => import(/* webpackChunkName: "intro" */'views/intro');

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  // base: '/', // only history mode
  routes: [
    {
      path: '/',
      redirect: '/intro',
    },
    {
      path: '/intro',
      name: 'intro',
      component: IntroView,
      meta: {
        layout: Define.LAYOUT_TYPE.EMPTY,
        className: 'dashboard',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        layout: Define.LAYOUT_TYPE.EMPTY,
        className: 'dashboard',
      },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: 'dashboard',
      },
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: VolunteerView,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: 'dashboard',
      },
    },
    {
      path: '/donation',
      name: 'donation',
      component: DonationView,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: 'dashboard',
      },
    },
    {
      path: '/my',
      name: 'my',
      component: MyView,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: 'dashboard',
      },
    },
    {
      path: '/donation/donationDetail',
      name: 'donationDetail',
      component: DonationDetailView,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: 'dashboard',
      },
    },
    {
      path: '/volunteer/volunteerDetail',
      name: 'volunteerDetail',
      component: VolunteerDetailView,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: 'dashboard',
      },
    },
  ],
});

// 전역 네비게이션
router.beforeEach((to, from, next) => {
  next();
});

export default router;

import Vue from 'vue';
import Router from 'vue-router';
import Define from '@/common/define';

import IntroView from '../views/common/IntroView.vue';
import LoginView from '../views/common/LoginView.vue';
import SignupView from '../views/common/SignupView.vue';
import HomeView from '../views/home/HomeView.vue';
import VolunteerView from '../views/volunteer/VolunteerView.vue';
import DonationView from '../views/donation/DonationView.vue';
import MyView from '../views/my/MyView.vue';
import DonationDetailView from '../views/donation/DonationDetailView.vue';
import VolunteerDetailView from '../views/volunteer/VolunteerDetailView.vue';
import BookmarksView from '../views/my/BookmarksView.vue';

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
      path: '/signup',
      name: 'signup',
      component: SignupView,
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
    {
      path: '/my/bookmarks',
      name: 'bookmarks',
      component: BookmarksView,
      meta: {
        layout: Define.LAYOUT_TYPE.FRAME,
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

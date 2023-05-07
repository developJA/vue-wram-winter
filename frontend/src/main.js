import Vue from 'vue';
import vueMoment from 'moment';
import App from './App';
import store from './store';
import router from './router';
import './assets/css/common.css';
import './assets/css/style.css';
import './assets/css/popup.css';

import EventBus, { $popAlert, $popConfirm, $popList } from '@/common/EventBus';

import CommonUtil from './common/commonUtil.js';
import Common from './common/common.js';

// import api from './plugins/api.js';
// import GlobalComponent from './common/global.component';

import global from './mixin/biz.util.js';

Vue.config.productionTip = false;
Vue.prototype.$popAlert = $popAlert;
Vue.prototype.$popConfirm = $popConfirm;
Vue.prototype.$popList = $popList;
Vue.prototype.CommonUtil = CommonUtil;
Vue.prototype.Common = Common;
Vue.prototype.EventBus = EventBus;
Vue.mixin(global);
// Vue.use(api);
// Vue.use(GlobalComponent);

Vue.use(vueMoment);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');

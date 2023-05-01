import './assets/css/common.css';
import './assets/css/style.css';
import './assets/css/popup.css';

import Vue from 'vue';
import vueMoment from 'moment';
import App from './App';
import store from './store';
import router from './router';

import GlobalComponent from './common/global.component';

import { $popAlert, $popConfirm, $popList } from '@/common/EventBus';

import CommonUtil from './common/commonUtil.js';

// import plugins from './plugin';
// Vue.use(plugins);

import api from './plugins/api.js';

Vue.config.productionTip = false;
Vue.use(GlobalComponent);
Vue.prototype.$popAlert = $popAlert;
Vue.prototype.$popConfirm = $popConfirm;
Vue.prototype.$popList = $popList;
Vue.prototype.CommonUtil = CommonUtil;
Vue.use(api);

Vue.use(vueMoment);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');

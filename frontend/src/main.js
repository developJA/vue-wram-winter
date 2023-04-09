import './assets/css/common.css';
import './assets/css/style.css';
import './assets/css/popup.css';

import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

import GlobalComponent from './common/global.component';
Vue.use(GlobalComponent);

import { $popAlert, $popConfirm, $popList } from "@/common/EventBus";
Vue.prototype.$popAlert = $popAlert;
Vue.prototype.$popConfirm = $popConfirm;
Vue.prototype.$popList = $popList;

import CommonUtil from './common/commonUtil.js';
Vue.prototype.CommonUtil = CommonUtil;

// import plugins from './plugin';
// Vue.use(plugins);

import api from "./plugins/api.js";
Vue.use(api);

import vueMoment from 'moment'
Vue.use(vueMoment);


new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
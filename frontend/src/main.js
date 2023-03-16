import './assets/css/style.css';

import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';


import GlobalComponent from './common/global.component';

// import plugins from './plugin';
import api from "./plugins/api.js";


Vue.config.productionTip = false;

Vue.use(GlobalComponent);
// Vue.use(plugins);
Vue.use(api);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
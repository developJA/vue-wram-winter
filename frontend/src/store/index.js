import Vue from 'vue';
import Vuex from 'vuex';

import global from '@/store/module/global';
import storage from '@/store/module/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    storage,
  },
  plugins: [

  ],
});

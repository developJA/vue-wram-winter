import Vue from "vue";
import Vuex from "vuex";

import global from '@/store/module/global';

//store 모듈 샘플 형태, 추후 삭제
import sample from "@/store/module/sample";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    sample,
  },
  plugins: [

  ]
});

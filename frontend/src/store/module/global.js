import _ from "lodash";
export const allClear = 'allClear';
import { getCntrGrpProgramList } from '../../api/index.js';


export const state = () => ({
  USER_INFO: {},
  DONATION_LIST: [],
});

export const actions = {
  FETCH_DONATION_LIST({ commit }) {
    getCntrGrpProgramList() 
    .then(({ data, status }) => {
      console.log(status);
      commit('SET_DONATION_LIST', data);
    })
    .catch(function(error){
      console.log(error);
    })
  },
};

export const mutations = {
  [allClear](state,payload){
  },
  USER_INFO(state, payload) {
    state['USER_INFO'] = payload;
  },
  SET_DONATION_LIST(state, list) {
    state.DONATION_LIST = list;
  },
};

export const getters = {
  USER_INFO: (st) => {
    return st['USER_INFO'];
  },
};

export default {
  namespaced: true,
  state,
  // 동기적 setter
  mutations,
  // 비동기적 setter
  actions,
  // getter
  getters,
};

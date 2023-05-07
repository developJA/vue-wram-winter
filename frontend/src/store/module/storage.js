import _ from 'lodash';

export const allClear = 'allClear';

export const state = () => ({
  AUTO_LOGIN_YN: '', // 자동로그인여부
  USER_ID: '', // 사용자 id
});

export const actions = {

};

export const mutations = {
  AUTO_LOGIN_YN(state, payload) {
    state['AUTO_LOGIN_YN'] = payload;
  },
  USER_ID(state, payload) {
    state['USER_ID'] = payload;
  },
};

export const getters = {
  AUTO_LOGIN_YN: (st) => st['AUTO_LOGIN_YN'],
  USER_ID: (st) => st['USER_ID'],
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

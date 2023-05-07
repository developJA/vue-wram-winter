import _ from 'lodash';

export const allClear = 'allClear';

export const state = () => ({
  AUTO_LOGIN_YN: '', // 자동로그인여부
});

export const actions = {

};

export const mutations = {
  AUTO_LOGIN_YN(state, payload) {
    state['AUTO_LOGIN_YN'] = payload;
  },
};

export const getters = {
  AUTO_LOGIN_YN: (st) => st['AUTO_LOGIN_YN'],
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

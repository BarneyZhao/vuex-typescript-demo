/* eslint-disable no-param-reassign */

const moduleState = {
  accountId: '',
  userId: '',
  info: {},
};
type State = typeof moduleState;

const moduleGetters = {};

const mutations = {
  setAccountId(state: State, payload: State['accountId']) {
    state.accountId = payload || '';
  },
  setUserId(state: State, payload: State['userId']) {
    state.userId = payload || '';
  },
  setUserInfo(state: State, payload: State['info']) {
    state.info = payload || {};
  },
};

const actions = {};

export default {
  // namespaced: true,
  state: moduleState,
  getters: moduleGetters,
  mutations,
  actions,
};

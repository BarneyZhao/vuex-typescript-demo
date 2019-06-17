/* eslint-disable no-param-reassign */

const cachePages: string[] = ['Home'];

const moduleState = {
  pagesName: [...cachePages],
};
type State = typeof moduleState;

const moduleGetters = {};

const mutations = {
  setPageToCache(state: State, payload: any) {
    state.pagesName.unshift(payload.pageName);
    setTimeout(() => {
      if (payload.callback) payload.callback();
    }, 0);
  },
  resetPageCache(state: State) {
    state.pagesName = [...cachePages];
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

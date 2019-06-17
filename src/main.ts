import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store, { Store } from './store/index';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

Vue.prototype.$$store = app.$store;

Vue.prototype.$$emit = (that: any, mutationName: string, ...params: any) => {
  if (!mutationName) throw new Error('$$emit need mutationName param');
  return new Promise((resolve, reject) => {
    that.$emit(mutationName, ...params, {
      success: resolve,
      fail: reject,
    });
  });
};

declare module 'vue/types/vue' {
  interface Vue {
    $$store: Store;
    $$emit: <T>(that: any, mutationName: string, ...params: any) => Promise<T>;
  }
}

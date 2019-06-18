import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store, { Store } from './store/index';
// 其他 ts 文件在直接解构引入的时候，也可以获得智能提示
// import { state, getters, commit, dispatch } from './store/index';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

Vue.prototype.$$store = app.$store;

// 新增 $$emit 方法, 将 $emit 封装成 Promise (需被调用端实现success和fail方法)
Vue.prototype.$$emit = (that: any, mutationName: string, ...params: any) => {
  if (!mutationName) throw new Error('$$emit need mutationName param');
  return new Promise((resolve, reject) => {
    that.$emit(mutationName, ...params, {
      success: resolve,
      fail: reject,
    });
  });
};

// 将改造过后的 Store 类型声明到 vue 的原型上，这样就可以在.vue 文件中获得 IDE 的智能提示了
declare module 'vue/types/vue' {
  interface Vue {
    $$store: Store;
    $$emit: <T>(that: any, mutationName: string, ...params: any) => Promise<T>;
  }
}

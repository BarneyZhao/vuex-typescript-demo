import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import user from './modules/user';
import pageCache from './modules/pageCache';

Vue.use(Vuex);

// 从 module 的 state 中提取 state 的类型并集合
interface State {
  auth: typeof auth.state;
  user: typeof user.state;
  pageCache: typeof pageCache.state;
}
// 将 getter 函数转换成 {getterName: getterFuncsReturnType} 的对象类型
export type ReturnGetters<T extends { [key: string]: (...args: any) => any }> = {
  [P in keyof T]: ReturnType<T[P]>;
}
// 提取所有 module 的 getter 函数类型对象
type GettersFuncs = (
  typeof auth.getters
  & typeof user.getters
  & typeof pageCache.getters
)
// 将 getter 转换成对象
type Getters = ReturnGetters<GettersFuncs>
// 提取 mutation 函数类型
type CommitFuncs = (
  typeof auth.mutations
  & typeof user.mutations
  & typeof pageCache.mutations
)
// 将 mutation 函数名及 payload 类型转换成 commit 函数的两个入参类型
interface Commit {
  <T extends keyof CommitFuncs>(type: T, payload?: Parameters<CommitFuncs[T]>[1]): void;
}
// dispatch 处理步骤同 commit
type DispatchFuncs = (
  typeof auth.actions
  & typeof user.actions
  & typeof pageCache.actions
)
interface Dispatch {
  <T extends keyof DispatchFuncs>(type: T, payload?: Parameters<DispatchFuncs[T]>[1]): Promise<any>;
}

const store = new Vuex.Store<State>({
  modules: {
    auth,
    user,
    pageCache,
  },
});
export default store;

// 结构导出时对每个对象进行类型的定义
export const { state } = store;
export const { getters }: { getters: Getters } = store; // 定义 getters 的类型
export const { commit }: { commit: Commit } = store; // 定义 commit 的类型
export const { dispatch }: { dispatch: Dispatch } = store; // 定义 commit 的类型

// 导出类型 Store 以便在 Vue 原型上定义类型
export interface Store {
  state: State;
  getters: Getters;
  commit: Commit;
  dispatch: Dispatch;
}

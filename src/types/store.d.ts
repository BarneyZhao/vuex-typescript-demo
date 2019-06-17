import { Store as s } from '../store/index';

export { ReturnGetters } from '../store/index';
export interface Store extends s {}
export interface ActionContext<S, G> {
  dispatch: Store['dispatch'];
  commit: Store['commit'];
  state: S;
  getters: G;
  rootState: Store['state'];
  rootGetters: any;
}

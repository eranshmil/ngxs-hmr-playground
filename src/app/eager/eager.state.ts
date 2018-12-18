import { State, Action, StateContext } from '@ngxs/store';

export class EagerChangeAction {
  static readonly type = '[Eager] Change';
}

export interface EagerStateModel {
  loaded: boolean;
  count: number;
}

@State<EagerStateModel>({
  name: 'eager',
  defaults: {
    loaded: false,
    count: 0,
  },
})
export class EagerState {
  @Action(EagerChangeAction)
  change({ setState }: StateContext<EagerStateModel>) {
    setState(state => ({ loaded: true, count: state.count + 1 }));
  }
}

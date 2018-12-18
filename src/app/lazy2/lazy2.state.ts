import { State, Action, StateContext } from '@ngxs/store';

export class Lazy2ChangeAction {
  static readonly type = '[Lazy2] Change';
}

export interface Lazy2StateModel {
  loaded: boolean;
  count: number;
}

@State<Lazy2StateModel>({
  name: 'lazy2',
  defaults: {
    loaded: false,
    count: 0,
  },
})
export class Lazy2State {
  @Action(Lazy2ChangeAction)
  change({ setState }: StateContext<Lazy2StateModel>) {
    setState(state => ({ loaded: true, count: state.count + 1 }));
  }
}

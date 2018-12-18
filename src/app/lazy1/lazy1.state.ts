import { State, Action, StateContext } from '@ngxs/store';

export class Lazy1ChangeAction {
  static readonly type = '[Lazy1] Change';
}

export interface Lazy1StateModel {
  loaded: boolean;
  count: number;
}

@State<Lazy1StateModel>({
  name: 'lazy1',
  defaults: {
    loaded: false,
    count: 0,
  },
})
export class Lazy1State {
  @Action(Lazy1ChangeAction)
  change({ setState }: StateContext<Lazy1StateModel>) {
    setState(state => ({ loaded: true, count: state.count + 1 }));
  }
}

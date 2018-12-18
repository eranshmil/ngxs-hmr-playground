import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { EagerChangeAction } from './eager/eager.state';
import { Lazy1ChangeAction } from './lazy1/lazy1.state';
import { Lazy2ChangeAction } from './lazy2/lazy2.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select('eager') eager$: Observable<string>;
  @Select('lazy1') lazy1$: Observable<string>;
  @Select('lazy2') lazy2$: Observable<string>;

  constructor(private _store: Store) {}

  eager() {
    this._store.dispatch(new Navigate(['eager']));
    this._store.dispatch(new EagerChangeAction());
  }

  lazy1() {
    this._store.dispatch(new Navigate(['lazy1']));
    setTimeout(() => this._store.dispatch(new Lazy1ChangeAction()), 1000);
  }

  lazy2() {
    this._store.dispatch(new Navigate(['lazy2']));
    setTimeout(() => this._store.dispatch(new Lazy2ChangeAction()), 1000);
  }
}

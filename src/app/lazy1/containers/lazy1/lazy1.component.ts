import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

import { Lazy1ChangeAction } from '../../lazy1.state';

@Component({
  selector: 'app-lazy1',
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.scss'],
})
export class Lazy1Component implements OnInit {
  constructor(private _store: Store) {}

  ngOnInit() {
    this._store.dispatch(new Lazy1ChangeAction());
  }
}

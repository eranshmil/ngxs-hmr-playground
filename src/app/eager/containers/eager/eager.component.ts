import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

import { EagerChangeAction } from '../../eager.state';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.scss'],
})
export class EagerComponent implements OnInit {
  constructor(private _store: Store) {}

  ngOnInit() {
    this._store.dispatch(new EagerChangeAction());
  }
}

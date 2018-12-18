import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

import { Lazy2ChangeAction } from '../../lazy2.state';

@Component({
  selector: 'app-lazy2',
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.scss'],
})
export class Lazy2Component implements OnInit {
  dsa: number;

  constructor(private _store: Store) {}

  ngOnInit() {
    this._store.dispatch(new Lazy2ChangeAction());
  }
}

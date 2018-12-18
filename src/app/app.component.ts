import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Select } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select('eager') eager$: Observable<string>;
  @Select('lazy1') lazy1$: Observable<string>;
  @Select('lazy2') lazy2$: Observable<string>;
}

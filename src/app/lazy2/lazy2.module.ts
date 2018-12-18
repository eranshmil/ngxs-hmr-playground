import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';

import { Lazy2Component } from './containers/lazy2/lazy2.component';
import { Lazy2RoutingModule } from './lazy2-routing.module';
import { Lazy2State } from './lazy2.state';

@NgModule({
  declarations: [Lazy2Component],
  imports: [CommonModule, NgxsModule.forFeature([Lazy2State]), Lazy2RoutingModule],
})
export class Lazy2Module {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';

import { Lazy1Component } from './containers/lazy1/lazy1.component';
import { Lazy1RoutingModule } from './lazy1-routing.module';
import { Lazy1State } from './lazy1.state';

@NgModule({
  declarations: [Lazy1Component],
  imports: [CommonModule, NgxsModule.forFeature([Lazy1State]), Lazy1RoutingModule],
})
export class Lazy1Module {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';

import { EagerComponent } from './containers/eager/eager.component';
import { EagerRoutingModule } from './eager-routing.module';
import { EagerState } from './eager.state';

@NgModule({
  declarations: [EagerComponent],
  imports: [CommonModule, NgxsModule.forFeature([EagerState]), EagerRoutingModule],
  exports: [EagerComponent],
  providers: [],
})
export class EagerModule {}

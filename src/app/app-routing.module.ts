import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './eager/containers/eager/eager.component';

const routes: Routes = [
  {
    path: '',
    component: EagerComponent,
    pathMatch: 'full',
  },
  {
    path: 'lazy1',
    loadChildren: './lazy1/lazy1.module#Lazy1Module',
  },
  {
    path: 'lazy2',
    loadChildren: './lazy2/lazy2.module#Lazy2Module',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

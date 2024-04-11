import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispositivosPage } from './dispositivos.page';

const routes: Routes = [
  {
    path: '', // /dispositivos
    component: DispositivosPage
  },
  {
    path: ':id', // /dispositivos/1
    component: DispositivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispositivosPageRoutingModule {}

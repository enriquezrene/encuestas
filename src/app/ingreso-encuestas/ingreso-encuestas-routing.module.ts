import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoEncuestasPage } from './ingreso-encuestas.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoEncuestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoEncuestasPageRoutingModule {}

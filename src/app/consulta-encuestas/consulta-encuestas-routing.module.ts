import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaEncuestasPage } from './consulta-encuestas.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaEncuestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaEncuestasPageRoutingModule {}

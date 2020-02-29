import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaEncuestasPageRoutingModule } from './consulta-encuestas-routing.module';

import { ConsultaEncuestasPage } from './consulta-encuestas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaEncuestasPageRoutingModule
  ],
  declarations: [ConsultaEncuestasPage]
})
export class ConsultaEncuestasPageModule {}

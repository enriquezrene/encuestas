import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoEncuestasPageRoutingModule } from './ingreso-encuestas-routing.module';

import { IngresoEncuestasPage } from './ingreso-encuestas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoEncuestasPageRoutingModule
  ],
  declarations: [IngresoEncuestasPage]
})
export class IngresoEncuestasPageModule {}

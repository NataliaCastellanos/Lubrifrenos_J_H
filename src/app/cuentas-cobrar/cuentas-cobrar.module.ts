import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarCobrosComponent } from './mostrar-cobros/mostrar-cobros.component';
import { RegistrarPagoCobrosComponent } from './registrar-pago-cobros/registrar-pago-cobros.component';

import { FlexLayoutModule} from '@angular/flex-layout';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MostrarCobrosComponent, RegistrarPagoCobrosComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    MostrarCobrosComponent,
    RegistrarPagoCobrosComponent
  ]
})
export class CuentasCobrarModule { }

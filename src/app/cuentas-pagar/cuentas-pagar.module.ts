import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarPagoPagosComponent } from './registrar-pago-pagos/registrar-pago-pagos.component';
import { CrearPagosComponent } from './crear-pagos/crear-pagos.component';
import { ModificarPagosComponent } from './modificar-pagos/modificar-pagos.component';
import { EliminarPagosComponent } from './eliminar-pagos/eliminar-pagos.component';
import { MostrarPagosComponent } from './mostrar-pagos/mostrar-pagos.component';

import { FlexLayoutModule} from '@angular/flex-layout';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegistrarPagoPagosComponent, CrearPagosComponent, ModificarPagosComponent, EliminarPagosComponent, MostrarPagosComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    RegistrarPagoPagosComponent,
    CrearPagosComponent,
    ModificarPagosComponent,
    EliminarPagosComponent,
    MostrarPagosComponent
  ]
})
export class CuentasPagarModule { }

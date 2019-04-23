import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { MostrarProductoComponent } from './mostrar-producto/mostrar-producto.component';


import { FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [CrearProductoComponent, ModificarProductoComponent, EliminarProductoComponent, MostrarProductoComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    CrearProductoComponent,
    ModificarProductoComponent,
    MostrarProductoComponent,
    EliminarProductoComponent
  ]
})
export class InventarioModule { }

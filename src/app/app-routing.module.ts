import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearProductoComponent } from './inventario/crear-producto/crear-producto.component';
import { EliminarProductoComponent } from './inventario/eliminar-producto/eliminar-producto.component';
import { ModificarProductoComponent } from './inventario/modificar-producto/modificar-producto.component';
import { MostrarProductoComponent } from './inventario/mostrar-producto/mostrar-producto.component';




const routes: Routes = [
  {path: 'inventario/crearproducto', component: CrearProductoComponent},
  {path: 'invenatario/modificarproducto', component: ModificarProductoComponent},
  {path: 'inventario/eliminarproducto', component: EliminarProductoComponent},
  {path: 'inventario/mostrarproducto', component: MostrarProductoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

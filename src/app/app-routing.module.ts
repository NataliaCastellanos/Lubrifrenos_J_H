import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { CrearProductoComponent } from './inventario/crear-producto/crear-producto.component';
//import { EliminarProductoComponent } from './inventario/eliminar-producto/eliminar-producto.component';
//import { ModificarProductoComponent } from './inventario/modificar-producto/modificar-producto.component';
import { MostrarProductoComponent } from './inventario/mostrar-producto/mostrar-producto.component';

//import { CreaComponent } from  './ventas/crea/crea.component';
//import { EliminarComponent } from './iventas/eliminar/eliminar.component';
//import { ModificarComponent } from './ventas/modificar/modificar.component';
import { MostrarComponent } from './ventas/mostrar/mostrar.component';

import { MostrarCobrosComponent } from './cuentas-cobrar/mostrar-cobros/mostrar-cobros.component';

import { MostrarPagosComponent } from './cuentas-pagar/mostrar-pagos/mostrar-pagos.component';

const routes: Routes = [
  //{path: 'inventario/crearproducto', component: CrearProductoComponent},
  //{path: 'invenatario/modificarproducto', component: ModificarProductoComponent},
  //{path: 'inventario/eliminarproducto', component: EliminarProductoComponent},
  {path: 'inventario/mostrarproducto', component: MostrarProductoComponent},

  {path: 'ventas/mostrar', component: MostrarComponent},

  {path: 'cuentas-cobrar/mostrar-cobros', component: MostrarCobrosComponent},

  {path: 'cuentas-pagar/mostrar-pagos', component: MostrarPagosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

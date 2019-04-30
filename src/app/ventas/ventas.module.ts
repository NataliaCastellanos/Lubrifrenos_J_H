import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreaComponent } from './crea/crea.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { MostrarComponent } from './mostrar/mostrar.component';

import { FlexLayoutModule} from '@angular/flex-layout';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CreaComponent, ModificarComponent, EliminarComponent, MostrarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule, 
    RouterModule
  ],
  exports: [
    CreaComponent,
    ModificarComponent,
    MostrarComponent,
    EliminarComponent
  ]
})
export class VentasModule { }

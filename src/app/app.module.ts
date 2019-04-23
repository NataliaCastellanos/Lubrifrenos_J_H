import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {FlexLayoutModule} from '@angular/flex-layout';

import { SharedModule  } from './shared/shared.module';

import { InventarioModule } from './inventario/inventario.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    InventarioModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }

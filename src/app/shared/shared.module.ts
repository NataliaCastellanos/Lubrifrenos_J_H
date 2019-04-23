import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {ContentComponent} from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { FlexLayoutModule} from '@angular/flex-layout';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContentComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,FontAwesomeModule,
    RouterModule
  ],
  // module be global in all project export
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }

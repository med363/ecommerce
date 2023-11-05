import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,FontAwesomeModule,
    // route fct
    RouterModule,
    // http client fct
    HttpClientModule
  ],
  // module be global in all project export
  exports: [
    HeaderComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }

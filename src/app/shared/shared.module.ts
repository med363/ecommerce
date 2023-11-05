import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,FontAwesomeModule,
    // route fct
    RouterModule,
    // http client fct
    HttpClientModule,
    // toway binding fct
    FormsModule
  ],
  // module be global in all project export
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule
    
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import module that exported
    SharedModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

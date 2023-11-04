import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartsComponent } from './carts/components/carts/carts.component';

const routes: Routes = [
  {path:"product", component:AllProductsComponent},
  {path:"details" , component:ProductsDetailsComponent},
  {path:'cart', component:CartsComponent},
  {path:"**",redirectTo:"product",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

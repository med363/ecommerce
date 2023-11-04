import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
// array for recieve data from api
products:any[]=[]
categories:any[]=[]
constructor(private service:ProductsService){}
// appel of service
ngOnInit():void{
  this.getProducts()
  this.getCategories()
}
// create of services get all 
getProducts(){
  this.service.getAllProducts().subscribe((res:any)=>{
// stock all product in array  products
this.products = res
}, err => {
  console.log(err.msg);
  
})
}

// create of services get all 
getCategories(){
  this.service.getAllCategories().subscribe((res:any)=>{
// stock all product in array  products
this.categories = res
}, err => {
  console.log(err.msg);
  
})
}

//detect change filter
filterCategory(event:any){
  let value=event.target.value;
  console.log(value);
  if (value=="all"){
    this.getProducts()
  }else{
  //send value to methode
  this.getProductsCategory(value)
  }

  
}
//appel of srv
getProductsCategory(keyword:string){
  this.service.getProductByCategories(keyword).subscribe((res:any) =>{
//mettre a jour arra of product
this.products = res
  })
}
}

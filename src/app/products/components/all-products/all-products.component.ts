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
// var for show spinner
loading:boolean= false
//cart array
cartProduct:any[]=[]
constructor(private service:ProductsService){}
// appel of service
ngOnInit():void{
  this.getProducts()
  this.getCategories()
}
// create of services get all 
getProducts(){
  // before req => show spinner
  this.loading=true
  this.service.getAllProducts().subscribe((res:any)=>{
// stock all product in array  products
this.products = res
  // after req => do not show spinner
  this.loading=false
}, err => {
  console.log(err.msg);
  // after req => do not show spinner
  this.loading=false
})
}

// create of services get all 
getCategories(){
    // before req => show spinner
    this.loading=true
  this.service.getAllCategories().subscribe((res:any)=>{
// stock all product in array  products
this.categories = res
 // after req => do not show spinner
 this.loading=false
}, err => {
  console.log(err.msg);
   // after req => do not show spinner
 this.loading=false
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
      // before req => show spinner
      this.loading=true
  this.service.getProductByCategories(keyword).subscribe((res:any) =>{
//mettre a jour arra of product
this.products = res
    // after req => do not show spinner
    this.loading=false
  })
}

//data from child product
addToCart(event:any){
  // pull data from localstorage
  // JSON.stringify //send data
  // JSON.parse() //receive data 
if("cart" in localStorage) {
  this.cartProduct= JSON.parse(localStorage.getItem("cart")!)
  // var to check if item id exit in array paroduct cart
  let exist = this.cartProduct.find(item => item.id == event.id)
  if(exist){
    alert("product aleready exist in cart")
  }else{
    this.cartProduct.push(event)
  // push in array cart product to localstorage
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  }
this.cartProduct.push(event)
  // push in array cart product to localstorage
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))
}
// cart not exist in localStorage
else{
  this.cartProduct.push(event)
  // push in array cart product to localstorage
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))

}
 console.log(event);
  
}
}

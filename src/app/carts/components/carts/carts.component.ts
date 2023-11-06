import { Component ,OnInit} from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit{
  constructor(private service:CartsService){}
  cartProduct:any[] = []
  //var of ttal price product
  total:any=0
  success:boolean = false

  ngOnInit(): void {
    this.getCartProduct()
  }

  
getCartProduct(){
    // pull data from localstorage
  // JSON.stringify //send data
  // JSON.parse() //receive data 
if("cart" in localStorage) {
  this.cartProduct= JSON.parse(localStorage.getItem("cart")!)
}
console.log(this.cartProduct);
//appel methode total
this.getCartProduct()
}

//in cart i will add number of product
addAmount(index:number){
  this.cartProduct[index].quantity++
     //appel methode total
this.getCartProduct()
  //update localstorage that i send MAJ
   // push in array cart product to localstorage
   localStorage.setItem("cart", JSON.stringify(this.cartProduct))

}

//update local storage when change input
detectChange(){
  this.getCartTotal()
     // push in array cart product to localstorage
     localStorage.setItem("cart", JSON.stringify(this.cartProduct))
}

deleteProduct(index:number) {
  this.cartProduct.splice(index , 1)
  this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
}

clearCart() {
  this.cartProduct = []
  this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct))
}
//in cart i will min number of product
minsAmount(index:number){
  this.cartProduct[index].quantity--
   //appel methode total
this.getCartProduct()
  //update localstorage that i send MAJ
 // push in array cart product to localstorage
 localStorage.setItem("cart", JSON.stringify(this.cartProduct))

}
//totat prize
getCartTotal(){
  this.total=0
  for (let x in this.cartProduct){
    this.total+=this.cartProduct[x].item.price * this.cartProduct[x].quantity;
  }

}

addCart() {
  let products = this.cartProduct.map(item => {
   return {productId:item.item.id , quantity:item.quantity}
  })

   let Model = {
     userId:5,
     date: new Date(),
     products:products
   }

   this.service.createNewCart(Model).subscribe(res => {
     this.success = true
   })

   console.log(Model)
 }
}

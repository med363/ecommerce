import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit{
  constructor(){}
  cartProduct:any[] = []
  //var of ttal price product
  total:any=0
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

//totat prize
getCartTotal(){
  this.total=0
  for (let x in this.cartProduct){
    this.total+=this.cartProduct[x].item.price * this.cartProduct[x].quantity;
  }

}
}

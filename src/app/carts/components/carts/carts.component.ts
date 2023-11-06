import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit{
  constructor(){}
  cartProduct:any[] = []
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

}
}

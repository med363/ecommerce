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
constructor(private service:ProductsService){}
// appel of service
ngOnInit():void{
  this.getProducts()
}
// create of services get all 
getProducts(){
  this.service.getAllProducts().subscribe((res:any)=>{
    console.log(res);
  })
}

}

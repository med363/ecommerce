import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  /*get all*/
  getAllProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  /*get cat*/
  getAllCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

    /*get product by categories keyword is the value of target value*/
    getProductByCategories(keyword:string){
      return this.http.get('https://fakestoreapi.com/products/category/'+keyword)
    }

      /*get product by id*/
  getProductById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
}

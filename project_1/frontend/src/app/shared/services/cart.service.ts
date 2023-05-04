// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Product, products } from '../models/products';
// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   items: Product[] = [];
//   products = products;

//   addToCart(product: Product): void{
//     this.items.push(product)
//   }

//   getItems(){
//     return this.items;
//   }

//   clearCart(){
//     this.items = [];
//     return this.items;
//   }

//   removeCartItem(product: Product){
//     this.items.map((a: any, index:any) => {
//       if(product.id === a.id){
//         this.items.splice(index, 1);
//       }
//     })
//   }

//   removeCartItem(product: Product){
//     this.items.map((a: any, index:any) => {
//       if(product.id === a.id){
//         this.items.splice(index, 1);
//         this.updateTotalPrice();
//       }
//     })
//   }

//   updateTotalPrice() {
//     this.totalPrice = this.getItems().reduce((acc, cur) => acc + cur.price, 0);
//   }
  
  
//   totalPrice(): () => number{
//    return () => this.getItems().reduce((acc, cur) => acc + cur.price, 0);
//   }

  

//   constructor(
//     private http: HttpClient
//   ) { }

//   getShippingPrices() {
//     return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  products = products;
  totalPrice = 0;

  addToCart(product: Product): void {
    this.items.push(product);
    this.updateTotalPrice();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.totalPrice = 0;
    return this.items;
  }

  removeCartItem(product: Product) {
    this.items.map((a: any, index:any) => {
      if(product.id === a.id) {
        this.items.splice(index, 1);
        this.updateTotalPrice(); // добавить эту строку
      }
    });
  }
  

  updateTotalPrice() {
    this.totalPrice = this.getItems().reduce((acc, cur) => acc + cur.price, 0);
  }

  constructor(private http: HttpClient) { }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}


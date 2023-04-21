import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCartItems(): any[] {
    throw new Error('Method not implemented.');
  }
  // items = [];

  constructor(
    private http: HttpClient
  ) { }

  // addToCart(product) {
  //   this.items.push(product);
  // }
  items: Products[] = [];

  addToCart(product: Products) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  

}
import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(url: string) {
    var sharelink = "https://t.me/share/url?url="+url;
    window.open(sharelink);
  }
  onNotify() {
    window.alert('You will receive the notification when the product will go on sale');
  }
}
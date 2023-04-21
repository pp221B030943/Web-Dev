import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// import { Products, products } from '../products';
// import { CartService } from '../cart.service';


// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html',
//   styleUrls: ['./product-details.component.css']
// })

// export class ProductDetailsComponent implements OnInit {

//   product: Products | undefined;

//   addToCart(product: Products) {
//     this.cartService.addToCart(product);
//     window.alert('Your product has been added to the cart!');
//   }
  
//   constructor(private route: ActivatedRoute, private cartService: CartService) { }

//   ngOnInit() {
//     // First get the product id from the current route.
//     const routeParams = this.route.snapshot.paramMap;
//     const productIdFromRoute = Number(routeParams.get('productId'));
  
//     // Find the product that correspond with the id provided in route.
//     this.product = products.find(product => product.id === productIdFromRoute);
//   }
  
// }


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Products } from '../products';

// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html',
//   styleUrls: ['./product-details.component.css']
// })
// export class ProductDetailsComponent implements OnInit {
//   product: any;

//   constructor(
//     private route: ActivatedRoute,
//     // private productService: ProductService
//   ) { }

//   ngOnInit(): void {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.product.getProductById(id).subscribe(
//       (data: any) => {
//         this.product = data;
//       },
//       (error: any) => {
//         console.log(error);
//       }
//     );
//   }

//   addToCart(product: any): void {
//     console.log(`Added ${product.name} to cart`);
//   }
// }

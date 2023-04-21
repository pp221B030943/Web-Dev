import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  product: any;

  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  
  ngOnInit() {
  }

}

// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {

//   cartItems: any[] = [];

//   constructor(private cartService: CartService) { }

//   ngOnInit(): void {
//     this.cartItems = this.cartService.getCartItems();
//   }

//   getTotal(): number {
//     let total = 0;
//     for (let item of this.cartItems) {
//       total += item.price * item.quantity;
//     }
//     return total;
//   }

//   checkout(): void {
//     alert('Ваш заказ оформлен!');
//     this.cartService.clearCart();
//     this.cartItems = [];
//   }

// }

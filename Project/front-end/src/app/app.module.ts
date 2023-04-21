// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { CartComponent } from './cart/cart.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     CartComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { TopBarComponent } from './top-bar/top-bar.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { CartComponent } from './cart/cart.component';
// import { HttpClientModule } from '@angular/common/http';
// import { ShippingComponent } from './shipping/shipping.component';
// import { LoginComponent } from './login/login.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { CategoryComponent } from './category/category.component';
// import { HomeComponent } from './home/home.component';
// import { LikeComponent } from './like/like.component';

// @NgModule({
//   imports: [
//     BrowserModule,
//     ReactiveFormsModule,
//     HttpClientModule,
//     RouterModule.forRoot([
//       { path: '', component: ProductListComponent },
//       { path: 'products/:productId', component: ProductDetailsComponent },
//       { path: 'cart', component: CartComponent },
//       { path: 'shipping', component: ShippingComponent },
//     ]),
//   ],
//   declarations: [
//     AppComponent,
//     TopBarComponent,
//     ProductListComponent,
//     ProductAlertsComponent,
//     ProductDetailsComponent,
//     CartComponent,
//     ShippingComponent,
//     LoginComponent,
//     AboutComponent,
//     ContactComponent,
//     CategoryComponent,
//     HomeComponent,
//     LikeComponent
//   ],
//   bootstrap: [
//     AppComponent
//   ]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { CategoryComponent } from './category/category.component';
import { LikeComponent } from './like/like.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'categories', component: CategoryComponent },
      { path: 'about', component: AboutComponent },
      { path: 'categories/:categoryName', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CategoryComponent,
    LikeComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

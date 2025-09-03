import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { CheckoutPageComponent } from './cart/checkout-page/checkout-page.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartDetailsComponent,
    CheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

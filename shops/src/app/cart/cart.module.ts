import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartsUserComponent} from './component/carts-user/carts-user.component';
import {RouterModule} from '@angular/router';
import {CartRoute} from './cart-routing';

@NgModule({
  declarations: [CartsUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CartRoute),
  ]
})
export class CartModule {
}

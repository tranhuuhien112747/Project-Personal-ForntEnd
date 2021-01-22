import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartsUserComponent} from './component/carts-user/carts-user.component';
import {RouterModule} from '@angular/router';
import {CartRoute} from './cart-routing';
import { CheckOutComponent } from './component/check-out/check-out.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { HistoryTransactionComponent } from './component/history-transaction/history-transaction.component';

@NgModule({
  declarations: [CartsUserComponent, CheckOutComponent, ConfirmationComponent, HistoryTransactionComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(CartRoute),
        ReactiveFormsModule,
    ]
})
export class CartModule {
}

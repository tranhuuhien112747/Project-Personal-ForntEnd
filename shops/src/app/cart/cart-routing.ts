import {Routes} from '@angular/router';
import {CartsUserComponent} from './component/carts-user/carts-user.component';
import {CheckOutComponent} from './component/check-out/check-out.component';
import {ConfirmationComponent} from './component/confirmation/confirmation.component';
import {HistoryTransactionComponent} from './component/history-transaction/history-transaction.component';

export const CartRoute: Routes = [
  {
    path: 'cart',
    component: CartsUserComponent
  }, {
    path: 'check-out',
    component: CheckOutComponent
  },
  {
    path: 'confirm',
    component: ConfirmationComponent
  },
  {
    path: 'history',
    component: HistoryTransactionComponent
  }
];

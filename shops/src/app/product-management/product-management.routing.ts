import {Routes} from '@angular/router';
import {ListProductComponent} from './component/list-product/list-product.component';
export const ProductRoute: Routes = [
  {
    path: 'shop',
    component: ListProductComponent
  }
];

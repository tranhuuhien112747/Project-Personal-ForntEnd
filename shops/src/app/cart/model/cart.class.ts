import {GoodsClass} from '../../product-management/model/goods.class';
import {User} from '../../page-common/model/User';

export class CartClass {
  public idCart: number;
  public quantity: number;
  public good: GoodsClass;
  public user: User;


  constructor(idCart: number, quantity: number) {
    this.idCart = idCart;
    this.quantity = quantity;
  }
}

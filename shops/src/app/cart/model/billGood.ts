import {Bill} from './bill';
import {GoodsClass} from '../../product-management/model/goods.class';

export class BillGood {
  public idBillGoods: number;
  public quantityBooked: number;
  public bill: Bill;
  public good: GoodsClass;

}

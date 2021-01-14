import {CategoryClass} from './category.class';

export class GoodsClass {
  public idGoods: number;
  public goodsName: string;
  public price: number;
  public quantity: number;
  public tradeMark: string;
  public saleOff: number;
  public priceForSaleOff: number;
  public image: string;
  public statusGood: boolean;
  public categorySex: string;
  public category: CategoryClass;
}

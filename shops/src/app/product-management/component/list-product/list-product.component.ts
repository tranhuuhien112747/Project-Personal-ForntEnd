import {Component, OnInit} from '@angular/core';
import {GoodsClass} from '../../model/goods.class';
import {ProductManagementService} from '../../service/product-management.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public goodList: GoodsClass[] = [];
  public good1: GoodsClass[] = [];
  public good2: GoodsClass[] = [];
  public good3: GoodsClass[] = [];

  constructor(
    private product: ProductManagementService
  ) {
  }

  ngOnInit(): void {
    this.product.getAllListGoods().subscribe(data => {
      this.goodList = data;

      for (const index of this.goodList) {
        if (index.category.idCategory === 1) {
          this.good1.push(index);
        } else if (index.category.idCategory === 2) {
          this.good2.push(index);
        } else if (index.category.idCategory === 3) {
          this.good3.push(index);
        }
      }
      console.log(this.good1);
      console.log(this.good2);
      console.log(this.good3);
    });
  }
}

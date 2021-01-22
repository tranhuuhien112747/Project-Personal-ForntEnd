import {Component, OnInit} from '@angular/core';
import {GoodsClass} from '../../model/goods.class';
import {ProductManagementService} from '../../service/product-management.service';
import {TokenStorageService} from '../../../page-common/service/token-storage/token-storage.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CartService} from '../../../cart/service/cart.service';
import {NotificationMessageComponent} from '../../../page-common/component/notification-message/notification-message.component';
import {MatDialog} from '@angular/material/dialog';

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
  public idUser: number;
  public formCart: FormGroup;

  constructor(
    private product: ProductManagementService,
    private tokenStorageService: TokenStorageService,
    private fb: FormBuilder,
    private carService: CartService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.product.getAllListGoods().subscribe(data => {
      this.goodList = data;
      console.log(this.goodList);
      for (const index of this.goodList) {
        if (index.idCategory === 1) {
          this.good1.push(index);
        } else if (index.idCategory === 2) {
          this.good2.push(index);
        } else if (index.idCategory === 3) {
          this.good3.push(index);
        }
      }
      console.log(this.good1);
      console.log(this.good2);
      console.log(this.good3);
    });
    this.formCart = this.fb.group({
      idGoods: [''],
      quantity: [''],
      idUser: ['']
    });
  }

  saveToCartsUser(idGood): void {
    this.idUser = this.tokenStorageService.getUser().id;
    this.formCart.setValue({idGoods: idGood, quantity: 1, idUser: this.idUser});
    console.log(this.formCart.value);
    this.carService.saveCart(this.formCart.value).subscribe(data => {
      this.messageSuccessAddCart();
    });
  }

  messageSuccessAddCart() {
    const timeout = 800;
    const dialogRef = this.dialog.open(NotificationMessageComponent, {
      panelClass: 'app-full-bleed-dialog',
      width: '500px',
      disableClose: true
    });
    dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
        dialogRef.close();
      }, timeout);
    });
  }
}

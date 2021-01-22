import {Component, OnInit} from '@angular/core';
import {CartClass} from '../../model/cart.class';
import {TokenStorageService} from '../../../page-common/service/token-storage/token-storage.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CartService} from '../../service/cart.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {CartUser} from '../../model/CartUser';

@Component({
  selector: 'app-carts-user',
  templateUrl: './carts-user.component.html',
  styleUrls: ['./carts-user.component.css']
})
export class CartsUserComponent implements OnInit {
  public cartUserList: CartUser[];
  public cartUpdate: CartClass[];
  // public listCarts: CartClass[];
  public idUser: number;
  public totalMoney = 0;
  public check = false;
  public checkDisplay = false;
  public formUpdateCart: FormGroup;

  constructor(
    private tokenStorageService: TokenStorageService,
    private route: Router,
    public dialog: MatDialog,
    private carService: CartService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.idUser = this.tokenStorageService.getUser().id;
    this.carService.getListCartUser(this.idUser).subscribe(data => {
        this.cartUserList = data;
        console.log(this.cartUserList);
        if (this.cartUserList === null) {
          this.checkDisplay = false;
        } else {
          this.checkDisplay = true;
          for (const element of this.cartUserList) {
            this.totalMoney += (element.quantity * this.formatNumber(element.price));
          }
        }
        console.log(this.cartUserList);
      }, () => {
        console.log('Error');
      }, () => {
        if (this.cartUserList !== null) {
          for (const cart of this.cartUserList) {
            this.addCart(cart);
          }
        }
      }
    );
    this.formUpdateCart = this.fb.group({
      listCartUpdate: this.fb.array([]),
    });
  }

  get listCartUpdate(): FormArray {
    return this.formUpdateCart.get('listCartUpdate') as FormArray;
  }

  newCart(cart: CartUser): FormGroup {
    return this.fb.group({
      idCart: [cart.idCart],
      quantity: [cart.quantity],
      good: [cart.idGoods],
      user: [cart.idUser],
      price: [cart.price],
      image: [cart.image],
      goodsName: [cart.goodsName],
      categorySex: [cart.categorySex],
    });
  }

  addCart(cart: CartUser): void {
    this.listCartUpdate.push(this.newCart(cart));
  }

  moneyProduct(idGoods: number, value: string) {
    this.totalMoney = 0;
    for (const element of this.cartUserList) {
      // tslint:disable-next-line:triple-equals
      if (idGoods == element.idGoods) {
        element.quantity = this.formatNumber(value);
      }
    }
    for (const element of this.cartUserList) {
      // tslint:disable-next-line:triple-equals
      if (element.quantity == undefined) {
        element.quantity = 0;
      }
      this.totalMoney += (element.quantity * this.formatNumber(element.price));
    }
  }

  openCheckOut() {
    let listCarts: CartClass[] = [];
    this.cartUpdate = [];
    listCarts = this.formUpdateCart.value.listCartUpdate;
    console.log(listCarts);
    for (const element of listCarts) {
      this.cartUpdate.push(new CartClass(element.idCart, element.quantity));
    }
    this.formUpdateCart.addControl('list', this.fb.control(this.cartUpdate));
    console.log(this.formUpdateCart.value);
    this.carService.updateCart(this.formUpdateCart.value).subscribe(data => {
      this.check = true;
    });
  }

  formatNumber(value: string): number {
    return Number(value);
  }
}

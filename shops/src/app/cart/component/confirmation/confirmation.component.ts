import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserManagementService} from '../../../user-management/service/user-management.service';
import {TokenStorageService} from '../../../page-common/service/token-storage/token-storage.service';
import {MatDialog} from '@angular/material/dialog';
import {CartService} from '../../service/cart.service';
import {CartUser} from '../../model/CartUser';
import {User} from '../../../page-common/model/User';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  public listCheckout: CartUser[];
  public idUser: number;
  public user: User;
  public checkPayment: string;
  public dateOrder: string;
  public orderNumber: number;
  public addressUser: string;
  public phoneNumberUser: string;
  public fullNameUser: string;
  public streetUser: string;
  public email: string;
  public moneyPayment: string;
  public dd;
  public mm;
  public yyyy;

  formatNumber(value: string): number {
    return Number(value);
  }

  formatDate(dd: string, mm: string, yyyy: number): string {
    const today = new Date();
    dd = String(today.getDate()).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0');
    yyyy = today.getFullYear();
    return dd + ' - ' + mm + ' - ' + yyyy;
  }

  constructor(
    public route: ActivatedRoute,
    private userService: UserManagementService,
    private tokenStorageService: TokenStorageService,
    public dialog: MatDialog,
    private carService: CartService,
  ) {
  }

  gotoTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    this.orderNumber = Math.floor(Math.random() * 99999) + 1000;
    this.checkPayment = this.route.snapshot.queryParamMap.get('checkPayment');
    this.moneyPayment = this.route.snapshot.queryParamMap.get('totalMoney');
    console.log(this.moneyPayment[0]);
    this.gotoTop();
    this.idUser = this.tokenStorageService.getUser().id;
    this.userService.getUserById(this.idUser).subscribe(data => {
      if (data == null) {
        console.log(data);
      } else {
        this.user = data;
        this.addressUser = data.address;
        this.fullNameUser = data.fullName;
        this.phoneNumberUser = data.phoneNumber;
        this.email = data.email;
      }
    });
  }

}

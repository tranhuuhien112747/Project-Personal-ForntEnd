import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TokenStorageService} from '../../../page-common/service/token-storage/token-storage.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CartService} from '../../service/cart.service';
import {CartUser} from '../../model/CartUser';
import {NotificationMessageComponent} from '../../../page-common/component/notification-message/notification-message.component';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  public listCheckout: CartUser[];
  public idUser: number;
  public totalMoney = 0;
  public checkPayment = false;
  public checkButton = false;

  formatNumber(value: string): number {
    return Number(value);
  }

  constructor(
    private tokenStorageService: TokenStorageService,
    private route: Router,
    public dialog: MatDialog,
    private carService: CartService,
  ) {
  }

  @ViewChild('paypalRef', {static: true}) private paypalRef: ElementRef;

  ngOnInit(): void {
    console.log(window.paypal);
    console.log(this.checkPayment);
    this.idUser = this.tokenStorageService.getUser().id;
    this.carService.getListCartUser(this.idUser).subscribe(data => {
      this.listCheckout = data;
      for (const element of this.listCheckout) {
        this.totalMoney += (element.quantity * this.formatNumber(element.price));
      }
    });
    paypal.Buttons(
      {
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'horizontal',
          label: 'paypal',
          tagline: true,
          height: 50
        },
        createOrder: (data, actions) => {
          // console.log('createOrder');
          // This function sets up the details of the transaction,
          // including the amount and line item details
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.totalMoney + 50,
                  currency_code: 'USD'
                }
              }
            ]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            console.log('Transaction completed');
          });
        },
        onError: (data, actions) => {
          console.log('Transaction error');
          // @ts-ignore
          $('#refreshData').click();
        }

      }
    ).render(this.paypalRef.nativeElement);
  }

  createBill() {
    this.idUser = this.tokenStorageService.getUser().id;
    this.carService.creatBillPaymentPayPal(this.idUser).subscribe(data => {
      this.messageSuccessAddCart();
    });
  }

  messageSuccessAddCart() {
    const timeout = 1500;
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
    this.route.navigate(['confirm'], {queryParams: {checkPayment: 'Payment by Paypal', totalMoney: this.totalMoney}});
  }

  eventPaypal() {
    this.checkPayment = true;
    this.checkButton = true;
  }

  eventDirect() {
    this.checkPayment = false;
    this.checkButton = false;
  }
}

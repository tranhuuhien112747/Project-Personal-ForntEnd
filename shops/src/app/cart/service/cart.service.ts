import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private API_CART = 'http://localhost:8080/cart';
  private API_CHECKOUT = 'http://localhost:8080/check-out';

  constructor(
    private http: HttpClient
  ) {
  }

  saveCart(cart): Observable<any> {
    return this.http.post(this.API_CART + '/save', cart);
  }

  getListCartUser(idUser): Observable<any> {
    return this.http.get(this.API_CART + '/' + idUser);
  }

  updateCart(cart): Observable<any> {
    return this.http.post(this.API_CART + '/updateCart', cart);
  }

  creatBillPaymentPayPal(idUser): Observable<any> {
    return this.http.post(this.API_CHECKOUT + '/payment-paypal' + idUser, idUser);
  }
  creatBillPaymentDirect(idUser): Observable<any> {
    return this.http.post(this.API_CHECKOUT + '/payment-direct' + idUser, idUser);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {
  private API_GOODS = 'http://localhost:8080/goods';

  constructor(private http: HttpClient) {
  }

  getAllListGoods(): Observable<any> {
    return this.http.get(this.API_GOODS + '/list-good');
  }
  getListGoodByTrademarkAndSex(trademark: string, sex: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('trademark', trademark);
    params = params.append('sex', sex);
    return this.http.get(this.API_GOODS + '/search-good', {params});
  }
}

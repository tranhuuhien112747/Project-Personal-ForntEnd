import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private API_USER = 'http://localhost:8080/user';

  constructor(
    private http: HttpClient
  ) {
  }

  getUserById(idUser): Observable<any> {
    return this.http.get(this.API_USER + '/' + idUser);
  }
}

import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../service/auth/authentication.service';
import {TokenStorageService} from '../service/token-storage/token-storage.service';
import {MatDialog} from '@angular/material/dialog';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private user1: User;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private tokenStorageService: TokenStorageService,
              private token: TokenStorageService,
              public dialog: MatDialog) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.token.getUser();

    if (user) {
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}

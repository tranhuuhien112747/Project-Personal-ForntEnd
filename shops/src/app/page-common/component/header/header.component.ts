import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {User} from '../../model/User';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {TokenStorageService} from '../../service/token-storage/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn = false;
  public user: User;
  public role: string;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private tokenStorageService: TokenStorageService,
    private route: Router
  ) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn === true) {
      this.user = this.tokenStorageService.getUser();
      this.role = this.tokenStorageService.getUser().role[0];
      this.authenticationService.findByUser(this.tokenStorageService.getUser().username).subscribe(next => {
        this.user = next;
      });
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }

  openCartUser() {
    this.route.navigateByUrl('/cart');
  }
}

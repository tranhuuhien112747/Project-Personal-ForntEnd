import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {TokenStorageService} from '../../service/token-storage/token-storage.service';
import {Router} from '@angular/router';
import {NotificationMessageComponent} from '../notification-message/notification-message.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isLoggedIn = false;
  public inputType = 'password';
  public isCheckInput = false;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authenticationService: AuthenticationService,
    private tokenStorageService: TokenStorageService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  openMessageSuccess() {
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
    this.route.navigateByUrl('/home');
  }

  onSubmitLogin(): void {
    console.log(this.loginForm.value);
    this.authenticationService.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorageService.saveToken(data.token);
        this.tokenStorageService.saveUser(data);
        this.isLoggedIn = true;
        this.route.navigateByUrl('/home').then((value) => {
          this.reloadPage();
          this.openMessageSuccess();
        });
      });
  }

  reloadPage(): void {
    window.location.reload();
  }

  displayPassword(): void {
    this.isCheckInput = !this.isCheckInput;
    if (this.isCheckInput === true) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {TokenStorageService} from '../../service/token-storage/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isLoggedIn = false;
  public errorMessage = '';
  public inputType = 'password';
  public isCheckInput = false;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authenticationService: AuthenticationService,
    private tokenStorageService: TokenStorageService,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmitLogin(): void {
    console.log(this.loginForm.value);
    this.authenticationService.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorageService.saveToken(data.token);
        this.tokenStorageService.saveUser(data);
        this.isLoggedIn = true;
        this.route.navigateByUrl('/home').then( (value) => {
            this.reloadPage();
          }
        );
      },
      err => {
        this.errorMessage = 'Tên tài khoản và mật khẩu không hợp lệ !';
        setTimeout(() => {
          this.errorMessage = '';
        }, 2000);
        this.isLoggedIn = false;
      }, () => {
        // this.reloadPage();
      }
    );
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

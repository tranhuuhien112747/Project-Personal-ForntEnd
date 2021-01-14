import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './component/home/home.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {LoginComponent} from './component/login/login.component';
import {RouterModule} from '@angular/router';
import {CommonRoute} from './page-common-routing.module';
import {ContactComponent} from './component/contact/contact.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {SupportComponent} from './component/support/support.component';
import {BlogComponent} from './component/blog/blog.component';
import {BlogDetailComponent} from './component/blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent,
    SupportComponent,
    BlogComponent,
    BlogDetailComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CommonRoute),
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class PageCommonModule {
}

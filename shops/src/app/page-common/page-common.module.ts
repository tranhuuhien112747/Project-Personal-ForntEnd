import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './component/home/home.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {LoginComponent} from './component/login/login.component';
import {RouterModule} from '@angular/router';
import {CommonRoute} from './page-common-routing.module';
import { ContactComponent } from './component/contact/contact.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, LoginComponent, ContactComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CommonRoute),
  ]
})
export class PageCommonModule {
}

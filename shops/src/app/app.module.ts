import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PageCommonModule} from './page-common/page-common.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {UserManagementModule} from './user-management/user-management.module';
import {ProductManagementModule} from './product-management/product-management.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PageCommonModule,
    UserManagementModule,
    ProductManagementModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

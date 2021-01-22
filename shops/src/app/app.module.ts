import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PageCommonModule} from './page-common/page-common.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {UserManagementModule} from './user-management/user-management.module';
import {ProductManagementModule} from './product-management/product-management.module';
import {HttpClientModule} from '@angular/common/http';
import {CartModule} from './cart/cart.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PageCommonModule,
    UserManagementModule,
    ProductManagementModule,
    CartModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

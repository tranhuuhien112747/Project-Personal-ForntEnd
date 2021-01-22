import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './component/create-product/create-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';
import { RemoveProductComponent } from './component/remove-product/remove-product.component';
import { DetailProductComponent } from './component/detail-product/detail-product.component';
import { ListProductComponent } from './component/list-product/list-product.component';
import {RouterModule} from '@angular/router';
import {ProductRoute} from './product-management.routing';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CreateProductComponent,
    EditProductComponent,
    RemoveProductComponent,
    DetailProductComponent,
    ListProductComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ProductRoute),
        ReactiveFormsModule,
    ]
})
export class ProductManagementModule { }

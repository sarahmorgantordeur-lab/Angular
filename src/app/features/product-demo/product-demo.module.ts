import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/ProductCardComponent';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductCardComponent,
    ProductListComponent
  ],
  exports: [
    ProductListComponent,
    ProductCardComponent
  ]
})
export class ProductDemoModule { }

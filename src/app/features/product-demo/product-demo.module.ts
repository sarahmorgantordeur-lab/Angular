import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/ProductCardComponent';
import { ProductSearchComponent } from './components/product-search/product-search.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductCardComponent,
    ProductListComponent,
    ProductSearchComponent,
    ReactiveFormsModule
  ],
  exports: [
    ProductListComponent,
    ProductSearchComponent
  ]
})
export class ProductDemoModule { }

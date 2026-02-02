import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../core/models/product.model';
import { ProductCardComponent } from '../product-card/ProductCardComponent';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `



    <div class="product-list-container">
      <div *ngIf='selectedProduct' class='selected-product'>
        <h3>Produit sélectionné :</h3>
          <p><strong>{{ selectedProduct.name }}</strong> - {{ selectedProduct.price }}</p>
      </div>
      
      <h2>Liste des produits</h2>
      <div class='product-list' *ngIf="products.length===0">
        <p>Aucun produit disponible pour le moment</p>
      </div>
      <div class="product-list" *ngIf="products.length!==0">
        <app-product-card
          *ngFor="let product of products"
          [product]="product"
          (selectedProduct)="handleProductSelection($event)">
        </app-product-card>
      </div>
    </div>
  `,
  styles: [`
    .product-list {
      border: 1px solid #ccc;
      padding: 1rem;
      margin: 0.5rem;
      border-radius: 8px;
      padding: 1rem;
    }
    .product-list-container {
      padding: 1rem;
    }
    .selected-product {
      background-color: #e8f5e9;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      border: 2px solid #4caf50;
    }
    .stock-warning {
        color: red;
    }
  `]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    this.products = [
      { id: 1, name: 'Super Widget', price: 19.99, releaseDate: new Date(), inStock: true },
      { id: 2, name: 'Gadget Pro', price: 299.50, releaseDate: new Date('2024-12-01'), inStock: false },
      { id: 3, name: 'Ear phone', price: 149.99, releaseDate: new Date(), inStock: true },
      { id: 4, name: 'Laptop', price: 1829.99, releaseDate: new Date('2025-12-01'), inStock: false },
    ];
  }

  selectedProduct: Product | null = null;

  handleProductSelection(product: Product): void {
      this.selectedProduct = product;
      console.log('Utilisateur sélectionné :', product);
    }
}

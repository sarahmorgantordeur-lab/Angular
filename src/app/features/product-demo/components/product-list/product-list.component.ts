import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-list">
      <h2>Liste des produits</h2>
      <div *ngFor="let product of products" class="product-card">
        <h3>{{ product.name | uppercase }}</h3>
        <p>Prix : {{ product.price | currency:'EUR' }}</p>
        <p>Date de sortie : {{ product.releaseDate | date:'mediumDate' }}</p>
        <p class='stock-warning' *ngIf="product.inStock">En rupture de stock.</p>
      </div>
    </div>
  `,
  styles: [`
    .product-list { padding: 1rem; }
    .product-card {
      border: 1px solid #ccc;
      padding: 1rem;
      margin: 0.5rem;
      border-radius: 8px;
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
}

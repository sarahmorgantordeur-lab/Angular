import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <div class="product-card" (click)="onCardClick()">
      <h3>{{ product.name }}</h3>
      <p>Prix : {{ product.price }}</p>
      <button (click)="onSelect($event)">Sélectionner le produit</button>
    </div>
  `,
  styles: [`
    .product-card {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 8px;
      margin: 0.5rem;
    }
    button {
      background-color: #3f51b5;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #303f9f;
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() selectedProduct = new EventEmitter<Product>();

  onCardClick(): void {
    console.log('Produit cliqué :', this.product.name);
  }

  onSelect(event: Event): void {
    event.stopPropagation(); // Empêche le clic de remonter à la div parente
    this.selectedProduct.emit(this.product);
  }
}

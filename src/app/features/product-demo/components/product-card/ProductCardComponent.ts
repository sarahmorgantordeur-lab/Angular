import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: `
    <div class="product-card" [class.out-of-stock]="!product.inStock" (click)="onCardClick()">
        <h3>{{ product.name }}</h3>
        <p>Prix : {{ product.price }}</p>
        <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .product-card {
      border: 1px solid #ccc;
      padding: 1rem;
      border-radius: 8px;
      margin: 0.5rem;
    }
    button:hover {
      background-color: #303f9f;
    }
    .out-of-stock {
        opacity: 0.6;
        background-color: #f5f5f5;
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

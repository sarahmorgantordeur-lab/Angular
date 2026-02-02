import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Product } from '../../../../core/models/product.model';
import { ProductCardComponent } from '../product-card/ProductCardComponent';
import { ProductService } from '../../services/product.service';

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
          <div class="actions">
            <button (click)="onSelect(product)" [disabled]="!product.inStock" #btn>{{ btn.disabled ? 'Indisponible' : 'Sélectionner' }}</button>
          </div>
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
    button {
      background-color: #3f51b5;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  private subscription!: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productService.products$.subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleProductSelection(product: Product): void {
    this.selectedProduct = product;
    console.log('Utilisateur sélectionné :', product);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    console.log('Produit sélectionné :', product.name);
  }
}

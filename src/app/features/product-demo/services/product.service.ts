import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Liste initiale des produits
  private initialProducts: Product[] = [
    { id: 1, name: 'Super Widget', price: 19.99, releaseDate: new Date(), inStock: true },
    { id: 2, name: 'Gadget Pro', price: 299.50, releaseDate: new Date('2024-12-01'), inStock: false },
    { id: 3, name: 'Ear phone', price: 149.99, releaseDate: new Date(), inStock: true },
    { id: 4, name: 'Laptop', price: 1829.99, releaseDate: new Date('2025-12-01'), inStock: false },
  ];

  // BehaviorSubject pour émettre les changements
  private productsSubject = new BehaviorSubject<Product[]>(this.initialProducts);

  // Observable public pour les composants
  products$ = this.productsSubject.asObservable();

  addProduct(product: Omit<Product, 'id'>): void {
    const currentProducts = this.productsSubject.value;
    const newId = Math.max(...currentProducts.map(p => p.id), 0) + 1;
    const newProduct: Product = { ...product, id: newId };
    this.productsSubject.next([...currentProducts, newProduct]);
  }

  getProducts(): Product[] {
    return this.productsSubject.value;
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="product-create-container">
      <h2>Créer un produit</h2>
      <form [formGroup]="productForm" (ngSubmit)="onSubmit()">
        <!-- Les champs du formulaire seront ajoutés ici -->
        <button type="submit">Créer</button>
      </form>
    </div>
  `,
  styles: [`
    .product-create-container {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin: 1rem;
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
export class ProductCreateComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({});
  }

  onSubmit(): void {
    console.log('Formulaire soumis:', this.productForm.value);
  }
}

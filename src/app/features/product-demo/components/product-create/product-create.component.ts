import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: "./product-create.component.html",
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
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      releaseDate: ['', [Validators.required]],
      inStock: [true]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log('Formulaire soumis:', this.productForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}

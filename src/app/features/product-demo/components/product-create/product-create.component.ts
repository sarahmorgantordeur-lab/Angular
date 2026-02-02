import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgClass],
  templateUrl: "./product-create.component.html",
  styles: [`
    .product-create-container {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin: 1rem;
    }
    input {
      padding: 0.5rem;
      border: 2px solid #ccc;
      border-radius: 4px;
      margin: 0.5rem 0;
      display: block;
      width: 200px;
    }
    input:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.3);
    }
    input.invalid {
      border-color: #f44336;
    }
    input.invalid:focus {
      box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.3);
    }
    input.valid {
      border-color: #4caf50;
    }
    button {
      background-color: #3f51b5;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1rem;
    }
    button:hover {
      background-color: #303f9f;
    }
    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0.5rem 0;
    }
    label input[type="checkbox"] {
      width: auto;
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

  // Getter pour accéder facilement au contrôle 'name' dans le template
  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  get releaseDate() {
    return this.productForm.get('releaseDate');
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log('Formulaire soumis:', this.productForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}

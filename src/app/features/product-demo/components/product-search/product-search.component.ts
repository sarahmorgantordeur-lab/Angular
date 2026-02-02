import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-search.component.html',
  styles: [`
    .search-container {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background-color: #f5f5f5;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
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
export class ProductSearchComponent {
  searchTerm: string = "";

  search(): void {
    console.log('Recherche:', this.searchTerm);
  }
}

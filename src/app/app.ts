import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title = 'Mon Projet Fil Rouge (J3)';
  currentView = 'products';

  showProducts(): void {
    this.currentView = 'products';
  }

  showUsers(): void {
    this.currentView = 'users';
  }
}

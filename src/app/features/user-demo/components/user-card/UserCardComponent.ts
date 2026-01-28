import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `
    <div class="user-card" (click)="onCardClick()">
      <h3>{{ user.name }}</h3>
      <p>Rôle : {{ user.role }}</p>
      <button (click)="onSelect($event)">Sélectionner l'utilisateur</button>
    </div>
  `,
  styles: [`
    .user-card {
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
export class UserCardComponent {
  @Input() user!: User;
  @Output() userSelected = new EventEmitter<User>();

  onCardClick(): void {
    console.log('Utilisateur cliqué :', this.user.name);
  }

  onSelect(event: Event): void {
    event.stopPropagation(); // Empêche le clic de remonter à la div parente
    this.userSelected.emit(this.user);
  }
}

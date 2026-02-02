import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: `
    <div class="user-card">
      <h3>{{ userData.name }}</h3>
      <p>ID : {{ userData.id }}</p>
      <p>Rôle : {{ userData.role }}</p>
      <p>Statut : {{ userData.isActive ? 'Actif' : 'Inactif' }}</p>
      <button (click)="onPromote()">Promouvoir</button>
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
  @Input() userData!: User;
  @Output() notifyParent = new EventEmitter<User>();

  onPromote(): void {
    this.notifyParent.emit(this.userData);
  }
}

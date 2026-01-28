import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../../core/models/user.model';
import { UserCardComponent } from '../user-card/UserCardComponent';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  template: `
    <div class="user-list-container">
      <div *ngIf="selectedUser" class="selected-user">
        <h3>Utilisateur sélectionné :</h3>
        <p><strong>{{ selectedUser.name }}</strong> - {{ selectedUser.role }}</p>
      </div>

      <h2>Liste des utilisateurs</h2>
      <div class="user-list">
        <app-user-card
          *ngFor="let user of users"
          [user]="user"
          (userSelected)="handleUserSelection($event)">
        </app-user-card>
      </div>
    </div>
  `,
  styles: [`
    .user-list-container {
      padding: 1rem;
    }
    .selected-user {
      background-color: #e8f5e9;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      border: 2px solid #4caf50;
    }
    .user-list {
      display: flex;
      flex-wrap: wrap;
    }
  `]
})
export class UserListComponent {
  // Tableau statique d'utilisateurs
  users: User[] = [
    { id: 1, name: 'Alice Dupont', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob Martin', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Claire Durand', email: 'claire@example.com', role: 'Guest', bio: 'Nouvelle utilisatrice' }
  ];

  // Variable pour stocker l'utilisateur sélectionné
  selectedUser: User | null = null;

  // Méthode appelée lors de la sélection d'un utilisateur
  handleUserSelection(user: User): void {
    this.selectedUser = user;
    console.log('Utilisateur sélectionné :', user);
  }
}

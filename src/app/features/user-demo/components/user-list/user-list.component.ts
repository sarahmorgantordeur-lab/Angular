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
          [userData]="user"
          (notifyParent)="handleUserSelection($event)">
        </app-user-card>
      </div>

      <h2>Équipe Projet</h2>
      <div class="user-list">
        <app-user-card
          *ngFor="let user of users"
          [userData]="user"
          (notifyParent)="onUserReceived($event)">
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
    { id: 1, name: 'Alice Dupont', role: 'Admin', isActive: true },
    { id: 2, name: 'Bob Martin', role: 'Dev', isActive: true },
    { id: 3, name: 'Claire Durand', role: 'Manager', isActive: true }
  ];

  // Variable pour stocker l'utilisateur sélectionné
  selectedUser: User | null = null;

  onUserReceived(user: User): void {
    console.log('Utilisateur reçu :', user);
  }

  // Méthode appelée lors de la sélection d'un utilisateur
  handleUserSelection(user: User): void {
    this.selectedUser = user;
    console.log('Utilisateur sélectionné :', user);
  }
}

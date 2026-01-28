import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/UserCardComponent';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserCardComponent,  // Composant standalone importé
    UserListComponent   // Composant standalone importé
  ],
  exports: [
    UserListComponent   // Exporté pour être utilisable ailleurs
  ]
})
export class UserDemoModule { }

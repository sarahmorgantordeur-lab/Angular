// C'est ici qu'on définit les variables.
import { Component } from '@angular/core';
@Component({
  selector: 'app-header', // IMPORTANT : C'est le nom de la balise HTML que vous utiliserez !
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Je déclare une variable 'title' de type texte
  title: string = 'Ascent Project Manager';
}
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BarnavComponent } from '../barnav/barnav.component';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [RouterLink, CommonModule, BarnavComponent, RouterOutlet],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

}

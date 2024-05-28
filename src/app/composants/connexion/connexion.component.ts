import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BarnavComponent } from '../barnav/barnav.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, BarnavComponent, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
    utilisateur_nom: string = '';
    utilisateur_prenom: string = '';
    email: string = '';
    utilisateur_adresse: string = '';
    utilisateur_tel: string = '';
    password: string = '';
    password_confirmation: string = '';

    // ...

    constructor(private apiService: ApiService, private router: Router) {}

    // ...


    goToAdminLogin() {
      this.router.navigate(['/connexion_admin']);
    }

    onSubmit() {
      const userData = {
        utilisateur_nom: this.utilisateur_nom,
        utilisateur_prenom: this.utilisateur_prenom,
        email: this.email,
        utilisateur_adresse: this.utilisateur_adresse,
        utilisateur_tel: this.utilisateur_tel,
        password: this.password,
        password_confirmation: this.password_confirmation
      };
      
      console.log(userData);

      this.apiService.register(userData).subscribe({
        next: (response) => {
          console.log('Success', response);
        },
        error: (error) => {
          console.error('Error', error);
        },
        complete: () => {
          console.log('Request complete');
        }
      });
  
    }
}

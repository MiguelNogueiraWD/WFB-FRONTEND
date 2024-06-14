import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login-chauffeur',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './connexion_chauffeur.html',
  styleUrls: ['./connexion_chauffeur.css']
})
export class LoginChauffeurComponent {
  chauffeur_email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.loginChauffeur(this.chauffeur_email, this.password).subscribe(response => {
      if (response.status === 'success') {
        localStorage.setItem('token', response.token);
        this.authService.setRole('chauffeur');
        this.authService.setChauffeurId(response.chauffeur.id); 
        console.log('Logged in as chauffeur');
        console.log('Logged in as chauffeur with ID:', response.chauffeur.id);
        this.router.navigate(['/']);
      } else {
        alert(response.error);
      }
    });
  }
}

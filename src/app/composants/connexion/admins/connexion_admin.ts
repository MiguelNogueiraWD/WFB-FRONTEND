import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-connexion-admin',
    standalone: true,
    imports: [CommonModule, FormsModule, HttpClientModule],
    templateUrl: './connexion_admin.html',
    styleUrls: ['./connexion_admin.css']
})
export class ConnexionAdminComponent {
    email: string = '';
    password: string = '';
  
    constructor(private authService: AuthService, private router: Router) {}
  
    login() {
        this.authService.loginUser(this.email, this.password).subscribe(response => {
          if (response.status === 'success') {
            localStorage.setItem('token', response.token);
            this.authService.setRole('admin'); 
            console.log('Logged in as admin');
            this.router.navigate(['/']);
          } else {
            alert(response.error);
          }
        });
      }
  }
  

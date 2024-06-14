import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chauffeur-create',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chauffeur-create.component.html',
  styleUrls: ['./chauffeur-create.component.css']
})
export class ChauffeurCreateComponent implements OnInit {
  chauffeur_nom: string = '';
  chauffeur_prenom: string = '';
  chauffeur_email: string = '';
  chauffeur_tel: string = '';
  chauffeur_adresse: string = '';
  chauffeur_statut: string = '';
  password: string = '';
  password_confirmation: string = '';

  isLoading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  //Enregistrement d'un chauffeur
  registerChauffeur() {
    const chauffeur = {
      chauffeur_nom: this.chauffeur_nom,
      chauffeur_prenom: this.chauffeur_prenom,
      chauffeur_email: this.chauffeur_email,
      chauffeur_tel: this.chauffeur_tel,
      chauffeur_adresse: this.chauffeur_adresse,
      chauffeur_statut: this.chauffeur_statut,
      password: this.password,
      password_confirmation: this.password_confirmation
    };

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.http.post('http://127.0.0.1:8000/api/chauffeur/register', chauffeur).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.successMessage = 'Chauffeur créé avec succès !';
        this.router.navigate(['/liste-chauffeurs']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Erreur lors de la création du chauffeur. Veuillez réessayer.';
        console.error('Error creating chauffeur:', error);
      }
    });
  }
}

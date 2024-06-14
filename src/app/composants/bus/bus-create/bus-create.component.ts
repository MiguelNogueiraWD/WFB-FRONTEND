import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-create',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './bus-create.component.html',
  styleUrls: ['./bus-create.component.css']
})
export class BusCreateComponent implements OnInit {
  marque: string = '';
  modele: string = '';
  immatriculation: string = '';
  capacite: number | null = null;
  statut: string = '';

  isLoading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  //Enregistrement d'un bus
  registerBus() {
    const bus = {
      marque: this.marque,
      modele: this.modele,
      immatriculation: this.immatriculation,
      capacite: this.capacite,
      statut: this.statut,
    };

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.http.post('http://127.0.0.1:8000/api/buses', bus).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.successMessage = 'Bus créé avec succès !';
        this.router.navigate(['/liste-buses']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Erreur lors de la création du bus. Veuillez réessayer.';
        console.error('Error creating bus:', error);
      }
    });
  }
}

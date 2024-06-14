import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BarnavComponent } from '../barnav/barnav.component';
import { FormsModule } from '@angular/forms';
import { MissionService } from '../../services/mission.service';
import { ApiService } from '../../services/api.service';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { MissionComponent } from '../mission-component/mission.component';

@Component({
  selector: 'app-moderation',
  standalone: true,
  imports: [CommonModule, BarnavComponent, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, HttpClientModule,MissionComponent],
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.css']
})
export class ModerationComponent {
    chauffeur_nom: string = '';
    chauffeur_prenom: string = '';
    chauffeur_email: string = '';
    chauffeur_adresse: string = '';
    chauffeur_tel: string = '';
    password: string = '';
    password_confirmation: string = '';
    chauffeur_statut: string = '';
    constructor(private http: HttpClient) {}
    /*
    onSubmit() {
      const chauffeurData = {
        chauffeur_nom: this.chauffeur_nom,
        chauffeur_prenom: this.chauffeur_prenom,
        chauffeur_email: this.chauffeur_email,
        chauffeur_adresse: this.chauffeur_adresse,
        chauffeur_tel: this.chauffeur_tel,
        password: this.password,
        password_confirmation: this.password_confirmation

      };
      
      console.log(chauffeurData);

     
      this.http.post('http://127.0.0.1:8000/api/chauffeur/register', chauffeurData).subscribe(response => {
      console.log('User registered', response);
    });
      */
  
    
    registerDriver() {
      const driver = {
        chauffeur_nom: this.chauffeur_nom,
        chauffeur_prenom: this.chauffeur_prenom,
        chauffeur_email: this.chauffeur_email,
        chauffeur_adresse: this.chauffeur_adresse,
        chauffeur_tel: this.chauffeur_tel,
        chauffeur_statut: "",
        password: this.password,
        password_confirmation: this.password_confirmation
      };
      this.http.post('http://127.0.0.1:8000/api/chauffeur/register', driver).subscribe(response => {
        console.log('Chauffeur enregistré', response);
      });
    }
}

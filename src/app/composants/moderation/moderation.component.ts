import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BarnavComponent } from '../barnav/barnav.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-moderation',
  standalone: true,
  imports: [CommonModule, BarnavComponent, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.css']
})
export class ModerationComponent {
    chauffeur_nom: string = '';
    chauffeur_prenom: string = '';
    chauffeur_email: string = '';
    chauffeur_adresse: string = '';
    chauffeur_tel: string = '';
    chauffeur_statut: string = '';
    constructor(private apiService: ApiService) {}

    onSubmit() {
      const chauffeurData = {
        chauffeur_nom: this.chauffeur_nom,
        chauffeur_prenom: this.chauffeur_prenom,
        chauffeur_email: this.chauffeur_email,
        chauffeur_adresse: this.chauffeur_adresse,
        chauffeur_tel: this.chauffeur_tel,
        chauffeur_statut: this.chauffeur_statut
      };
      
      console.log(chauffeurData);

      this.apiService.register(chauffeurData).subscribe({
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

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ChauffeurService } from '../../../services/chauffeur.service';
import { AuthService } from '../../../services/auth.service';
import moment from 'moment';

@Component({
  selector: 'app-chauffeur-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './chauffeur-detail.component.html',
  styleUrls: ['./chauffeur-detail.component.css']
})
export class ChauffeurDetailComponent implements OnInit {
  chauffeur: any;
  filteredMissions: any[] = [];
  filter: string = 'today';
  isAdmin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chauffeurService: ChauffeurService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isAdmin = this.authService.getRole() === 'admin';
    const chauffeurId = this.route.snapshot.params['id'];
    console.log('Chauffeur ID from route:', chauffeurId);
    this.loadChauffeurDetails(chauffeurId);
  }

  //Chargement des données du chauffeur
  loadChauffeurDetails(chauffeurId: number) {
    this.chauffeurService.getChauffeurDetails(chauffeurId).subscribe({
      next: (response) => {
        console.log('Chauffeur details response:', response);
        this.chauffeur = response.chauffeur;
        this.filteredMissions = this.filterMissions(this.chauffeur.missions, this.filter);
      },
      error: (error) => {
        console.error('Error loading chauffeur details:', error);
      }
    });
  }

  //Fonctions de filtres
  onFilterChange(newFilter: string) {
    this.filter = newFilter;
    this.filteredMissions = this.filterMissions(this.chauffeur.missions, this.filter);
  }

  filterMissions(missions: any[], filter: string): any[] {
    const today = moment().format('YYYY-MM-DD');
    switch (filter) {
      case 'past':
        return missions.filter(mission => mission.date < today).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case 'future':
        return missions.filter(mission => mission.date > today).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case 'today':
      default:
        return missions.filter(mission => mission.date === today);
    }
  }

  navigateToMissionDetails(id: number) {
    this.router.navigate(['/missions', id]);
  }

  navigateToCreateMissionForChauffeur() {
    this.router.navigate(['/missions/create'], { queryParams: { chauffeurId: this.chauffeur.id } });
  }


  //Confirmation de suppression et suppression
  confirmDelete() {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce chauffeur ?')) {
      this.deleteChauffeur();
    }
  }

  deleteChauffeur() {
    this.chauffeurService.deleteChauffeur(this.chauffeur.id).subscribe({
      next: (response) => {
        this.router.navigate(['/liste-chauffeurs']);
      },
      error: (error) => {
        console.error('Error deleting chauffeur:', error);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChauffeurService } from '../../../services/chauffeur.service';

@Component({
  selector: 'app-chauffeur-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chauffeur-list.component.html',
  styleUrls: ['./chauffeur-list.component.css']
})
export class ChauffeurListComponent implements OnInit {
  chauffeurs: any[] = [];

  constructor(private chauffeurService: ChauffeurService, private router: Router) {}

  ngOnInit() {
    this.loadChauffeurs();
  }

  //Chargement des données
  loadChauffeurs() {
    this.chauffeurService.getChauffeurs().subscribe(response => {
      this.chauffeurs = response;
    });
  }

  navigateToChauffeurDetails(id: number) {
    this.router.navigate(['/chauffeurs', id]);
  }

  navigateToCreateChauffeur() {
    this.router.navigate(['/chauffeurs/create']);
  }
}

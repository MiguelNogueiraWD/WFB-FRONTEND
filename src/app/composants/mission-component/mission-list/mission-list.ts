import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { MissionService } from '../../../services/mission.service';
import { AuthService } from '../../../services/auth.service';
import moment from 'moment';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './mission-list.html',
  styleUrls: ['./mission-list.css']
})
export class MissionListComponent implements OnInit {
  missions: any[] = [];
  filter: string = 'today';
  isChauffeur: boolean = false;
  isAdmin: boolean = false;
  chauffeurId: number | null = null;

  constructor(private missionService: MissionService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isChauffeur = this.authService.isChauffeur();
    this.isAdmin = this.authService.getRole() === 'admin';
    if (this.isChauffeur) {
      this.chauffeurId = this.authService.getChauffeurId();
    }
    console.log('Role:', this.authService.getRole());
    console.log('Chauffeur ID:', this.chauffeurId);
    console.log(this.isChauffeur);
    this.getMissions();
  }

  getMissions() {
    if (this.isChauffeur && this.chauffeurId !== null) {
      console.log('Fetching missions for chauffeur with ID:', this.chauffeurId);
      this.missionService.getMissionsChauffeur(this.filter, this.chauffeurId).subscribe({
        next: (response: any) => {
          console.log('Missions for chauffeur response:', response);
          this.missions = response.missions;
        },
        error: (error: any) => {
          console.error('Error fetching missions for chauffeur:', error);
        }
      });
    } else {
      console.log('Fetching all missions with filter:', this.filter);
      this.missionService.getMissions(this.filter).subscribe({
        next: (response: any) => {
          console.log('All missions response:', response);
          this.missions = response.missions;
        },
        error: (error: any) => {
          console.error('Error fetching all missions:', error);
        }
      });
    }
  }

  onFilterChange(newFilter: string) {
    this.filter = newFilter;
    this.getMissions();
  }

  navigateToMissionDetails(id: number) {
    this.router.navigate(['/missions', id]);
  }

  navigateToEditMission(id: number) {
    this.router.navigate(['/missions/edit', id]);
  }

  navigateToBusDetails(id: number) {
    this.router.navigate(['/buses', id]);
  }

  startMission(id: number) {
    if (this.isChauffeur && this.chauffeurId !== null) {
      this.missionService.startMission(id, this.chauffeurId).subscribe({
        next: (response: any) => {
          console.log('Mission started:', response);
          this.getMissions(); // Refresh the list
        },
        error: (error: any) => {
          console.error('Error starting mission:', error);
        }
      });
    }
  }

  stopMission(id: number) {
    if (this.isChauffeur) {
      this.missionService.stopMission(id).subscribe({
        next: (response: any) => {
          console.log('Mission stopped:', response);
          this.getMissions(); // Refresh the list
        },
        error: (error: any) => {
          console.error('Error stopping mission:', error);
        }
      });
    }
  }

  shouldShowStartButton(mission: any): boolean {
    const today = moment().format('YYYY-MM-DD');
    return mission.statut_mission !== 'terminée' && mission.date === today && mission.statut_mission !== 'en cours';
  }

  shouldShowStopButton(mission: any): boolean {
    const today = moment().format('YYYY-MM-DD');
    return mission.statut_mission === 'en cours' && mission.date === today;
  }
}

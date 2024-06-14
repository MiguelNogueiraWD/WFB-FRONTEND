import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MissionService } from '../../../services/mission.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-mission-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './mission-detail.html',
  styleUrls: ['./mission-detail.css']
})
export class MissionDetailComponent implements OnInit {
  mission: any;
  isChauffeur: boolean = false;
  chauffeurId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private missionService: MissionService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isChauffeur = this.authService.isChauffeur();
    if (this.isChauffeur) {
      this.chauffeurId = this.authService.getChauffeurId();
    }
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.missionService.getMission(id).subscribe(response => {
        this.mission = response.mission;
      });
    });
  }
}

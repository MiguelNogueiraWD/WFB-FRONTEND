import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionService } from '../../../services/mission.service';

@Component({
  selector: 'app-mission-update',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './mission-update.html',
  styleUrls: ['./mission-update.css']
})
export class MissionUpdateComponent implements OnInit {
  mission: any = {
    date: '',
    heure_debut: '',
    heure_fin: '',
    details_mission: '',
    chauffeur_id: null,
    bus_id: null,
    vol_id: null
  };

  constructor(
    private route: ActivatedRoute,
    private missionService: MissionService,
    private router: Router
  ) {}

  ngOnInit() {
    const missionId = this.route.snapshot.params['id'];
    this.missionService.getMission(missionId).subscribe(response => {
      this.mission = response.mission;
    });
  }

  updateMission() {
    const missionId = this.route.snapshot.params['id'];
    this.missionService.updateMission(missionId, this.mission).subscribe(response => {
      this.router.navigate(['/missions', missionId]);
    });
  }
}

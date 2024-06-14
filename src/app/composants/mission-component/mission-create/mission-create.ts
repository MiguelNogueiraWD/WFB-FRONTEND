import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MissionService } from '../../../services/mission.service';
import { ChauffeurService } from '../../../services/chauffeur.service';
import { BusService } from '../../../services/bus.service';
import { VolService } from '../../../services/vol.service';

@Component({
  selector: 'app-mission-create',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './mission-create.html',
  styleUrls: ['./mission-create.css']
})
export class MissionCreateComponent implements OnInit {
  missionData = {
    date: '',
    heure_debut: '',
    heure_fin: '',
    details_mission: '',
    chauffeur_id: null,
    bus_id: null,
    vol_id: null
  };

  chauffeurs: any[] = [];
  buses: any[] = [];
  vols: any[] = [];

  constructor(
    private missionService: MissionService,
    private chauffeurService: ChauffeurService,
    private busService: BusService,
    private volService: VolService
  ) {}

  ngOnInit() {
    this.loadChauffeurs();
    this.loadBuses();
    this.loadVols();
  }

  loadChauffeurs() {
    this.chauffeurService.getChauffeurs().subscribe(data => {
      this.chauffeurs = data;
    });
  }

  loadBuses() {
    this.busService.getBuses().subscribe(data => {
      this.buses = data;
    });
  }

  loadVols() {
    this.volService.getVols().subscribe(data => {
      this.vols = data;
    });
  }

  createMission() {
    this.missionService.createMission(this.missionData).subscribe(response => {
      console.log('Mission créée', response);
    });
  }
}

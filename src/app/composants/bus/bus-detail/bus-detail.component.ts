import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from '../../../services/bus.service';
import { AuthService } from '../../../services/auth.service';
import moment from 'moment';

@Component({
  selector: 'app-bus-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css']
})
export class BusDetailComponent implements OnInit {
  bus: any;
  filteredMissions: any[] = [];
  newMaintenance: any = {
    maintenance_date: '',
    maintenance_description: '',
    cout: null,
    bus_id: null
  };
  filter: string = 'today';
  isAdmin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: BusService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isAdmin = this.authService.getRole() === 'admin';
    const busId = this.route.snapshot.params['id'];
    this.loadBusDetails(busId);
  }

  //Chargement des données des bus
  loadBusDetails(busId: number) {
    this.busService.getBusDetails(busId).subscribe(response => {
      this.bus = response.bus;
      this.newMaintenance.bus_id = busId;
      this.filteredMissions = this.filterMissions(this.bus.missions, this.filter);
    });
  }

  //Fonctions filtre
  onFilterChange(newFilter: string) {
    this.filter = newFilter;
    this.filteredMissions = this.filterMissions(this.bus.missions, this.filter);
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

  //Ajout d'une maintenance
  addMaintenance() {
    this.busService.addMaintenance(this.newMaintenance).subscribe(response => {
      console.log('Maintenance added:', response);
      this.bus.maintenances.push(response.maintenance);
    }, error => {
      console.error('Error adding maintenance:', error);
    });
  }

  navigateToMissionDetails(id: number) {
    this.router.navigate(['/missions', id]);
  }
}

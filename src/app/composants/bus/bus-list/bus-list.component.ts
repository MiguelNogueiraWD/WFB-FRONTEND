import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BusService } from '../../../services/bus.service';

@Component({
  selector: 'app-bus-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  buses: any[] = [];

  constructor(private busService: BusService, private router: Router) {}

  ngOnInit() {
    this.loadBuses();
  }

  //Chargement des données
  loadBuses() {
    this.busService.getBuses().subscribe(response => {
      this.buses = response;
    });
  }

  navigateToBusDetails(id: number) {
    this.router.navigate(['/buses', id]);
  }

  navigateToCreateBus() {
    this.router.navigate(['/buses/create']);
  }
}

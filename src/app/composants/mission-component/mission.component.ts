import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ModerationComponent } from '../moderation/moderation.component';
@Component({
  selector: 'app-mission-component',
  standalone: true,
  imports: [CommonModule, ModerationComponent],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
  export class MissionComponent implements OnInit {
    missions: any[] = [];
    filter: string = 'disponible';
  
    private apiUrl = 'http://127.0.0.1:8000/api/missions'; // Update with your backend URL
  
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.getMissions(this.filter);
    }
  
    getMissions(filter: string): void {
      const params = new HttpParams().set('filter', filter);
      this.http.get<any>(this.apiUrl, { params }).subscribe({
        next: response => {
          this.missions = response.missions;
          this.filter = response.filter;
        },
        error: error => {
          console.error('Error fetching missions', error);
        }
      });
    }
  }

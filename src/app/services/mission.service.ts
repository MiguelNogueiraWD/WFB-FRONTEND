import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  //private apiUrl = `${environment.apiUrl}/api/missions`;
  private apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  createMission(missionData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/missions`, missionData);
  }
  getMissions(filter: string ='today'): Observable<any> {
    const params = new HttpParams().set('filter', filter);
    return this.http.get(this.apiUrl, {params});
  }
  getMission(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/missions/${id}`);
  }

  updateMission(id: number, missionData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/missions/${id}`, missionData);
  }

  startMission(id: number, chauffeurId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/missions/${id}/start`, { chauffeurId });
  }

  stopMission(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/missions/${id}/stop`, {});
  }

  getMissionsChauffeur(filter: string , chauffeurId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/chauffeur/missions`, { params: { filter, chauffeurId } });
  }
}

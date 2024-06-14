import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getBuses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/buses`);
  }

  getBusDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/buses/${id}`);
  }

  addMaintenance(maintenanceData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/buses/maintenance`, maintenanceData);
  }
}

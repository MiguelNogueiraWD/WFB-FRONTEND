import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getChauffeurs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/chauffeurs`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  loginChauffeur(chauffeur_email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/chauffeur/login`, { chauffeur_email, password });
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    }
  }

  isLoggedIn(): boolean {
    return typeof window !== 'undefined' && !!localStorage.getItem('token');
  }
  isChauffeur(): boolean {
    return typeof window !== 'undefined' && localStorage.getItem('role') === 'chauffeur';
  }

  setRole(role: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('role', role);
    }
  }

  getRole(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('role');
    }
    return null;
  }

  setChauffeurId(chauffeurId: number) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('chauffeurId', chauffeurId.toString());
    }
  }

  getChauffeurId(): number | null {
    if (typeof window !== 'undefined') {
      const id = localStorage.getItem('chauffeurId');
      return id ? parseInt(id, 10) : null;
    }
    return null;
  }
}

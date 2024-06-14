import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
  /*moderation(chauffeurData: any): Observable<any> {
    chauffeurData.chauffeur_statut = "";
    return this.http.post(`${this.apiUrl}/chauffeur/register`, chauffeurData);
  }
  */
  admin_Login(admin_tel: string, admin_password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl +'/admin', { admin_tel, admin_password });
  }


}
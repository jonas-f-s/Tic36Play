import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }


  getVideos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/videos`);
  }


  getFavorites(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/favorites?userId=${userId}`);
  }


  getWatchLater(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/watchLater?userId=${userId}`);
  }
}

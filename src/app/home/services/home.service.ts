import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Film, Home, HomePeople } from '../model/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<Home> {
    const url = `${environment.urlBase}planets`;
    return this.http.get<Home>(url);
  }

  getPeople(): Observable<HomePeople> {
    const url = `${environment.urlBase}people`;
    return this.http.get<HomePeople>(url);
  }

  getFilm(url): Observable<Film> {
    return this.http.get<Film>(url);
  }
}

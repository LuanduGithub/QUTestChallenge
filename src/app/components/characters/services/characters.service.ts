import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Characters } from '../models/characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacter(url): Observable<Characters> {
    return this.http.get<Characters>(url);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, tap, catchError } from 'rxjs';
import { RickMorty, RickMortyCharacter } from './rick-morty';



@Injectable({
  providedIn: 'root',
  
})
export class RickMortyService {
  private apiUrl = 'http://localhost:8080/rick-morty-characters'; 

  constructor(private http: HttpClient) {}

  public getCharacters() {
    // const offset = (page - 1) * pageSize;
    // const url = `${this.apiUrl}/characters?limit=${pageSize}&offset=${offset}`;
    return this.http.get<RickMortyCharacter[]>(this.apiUrl);
  }
}

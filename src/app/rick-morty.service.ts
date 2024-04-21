import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, catchError, map } from 'rxjs';
import { RickMortyCharacter } from './rick-morty';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private apiUrl = 'http://localhost:8080/rick-morty-characters';

  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<RickMortyCharacter[]> {    
    return this.http.get<RickMortyCharacter[]>(this.apiUrl);
  }
}

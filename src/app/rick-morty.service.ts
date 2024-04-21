import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap, catchError, map } from 'rxjs';
import { RickMortyCharacter } from './rick-morty';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private apiUrl = 'http://localhost:8080/rick-morty-characters';
  private characterUrl = this.apiUrl+"/character-detail";

  constructor(private http: HttpClient) {}

 getCharacters(): Observable<RickMortyCharacter[]> {    
    return this.http.get<RickMortyCharacter[]>(this.apiUrl);
  }

  characterDetail(characterId: number): Observable<RickMortyCharacter> {
    const params = new HttpParams().set('character_id', characterId.toString());
    return this.http.post<RickMortyCharacter>(this.characterUrl, null, { params });
  }
}

import { SearchResults } from './../models/searchMovies';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  searchMovies(query: string, page: number): Observable<SearchResults>{
    let searchUrl = `${environment.movieAPI}/search/movie?api_key=` +
    `${environment.apiKey}&language=en&query=${query}&page=${page}`

    return this.http.get<SearchResults>(searchUrl);
  }
}

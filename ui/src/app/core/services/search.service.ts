import { SearchResults } from './../models/searchMovies';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDetail } from '../models/movieDetail';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  // searchMovies searches the database based on query and page given
  searchMovies(query: string, page: number): Observable<SearchResults>{
    let searchUrl = `${environment.movieAPI}/search/movie?api_key=` +
    `${environment.apiKey}&language=en&query=${query}&page=${page}`

    return this.http.get<SearchResults>(searchUrl);
  }

  // searchDetails takes a movie id and searches for additional movie details
  searchDetails(id: number): Observable<MovieDetail>{
    let detailsUrl = `${environment.movieAPI}/movie/${id}?api_key=` +
    `${environment.apiKey}&language=en`

    return this.http.get<MovieDetail>(detailsUrl);
  }
}

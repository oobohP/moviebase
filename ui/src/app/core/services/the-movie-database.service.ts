import { environment } from './../../../environments/environment.prod';
import { PopularMovies } from './../models/popularMovies';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDatabaseService {

  constructor(
    private http: HttpClient
  ) { }

  // Gets a list of popular results from the movie database
  getPopularResults(): Observable<PopularMovies> {
    return this.http.get<PopularMovies>(environment.movieAPI + `/movie/popular?api_key=${environment.apiKey}&language=en-US&page=1`)
  }

}

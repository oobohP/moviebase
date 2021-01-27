import { TheMovieDatabaseService } from './core/services/the-movie-database.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private movieService: TheMovieDatabaseService
  ) {}

  title = 'moviebase';

  onClick() {
    this.movieService.getPopularResults().subscribe(response => {
      console.log(response.results);
    })
  }
}

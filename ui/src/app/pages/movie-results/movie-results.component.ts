import { Movie } from './../../core/models/popularMovies';
import { SearchService } from './../../core/services/search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.scss']
})
export class MovieResultsComponent implements OnInit {

  /*
  TODO:
    receive data from search component via routing, have page navigators that query api for each page with QUERY & PAGE
    loading spinner

    Intended user navigation will be:
    User hits home via root domain, home page shows about infographic and carousel component cool 3d whoosh
    That page MIGHT have a search bar? maybe, or a button that says "get started and it opens nav bar"

    from there the user searches a movie from the navbar global state -> search component redirects to this movie-results component
    sends the query data, has loading spinner or splash, queries and shows the movies in cards popularity title etc

    from there if the user clicks on a card, a dialog will popup with more DETAILEd information (mat-dialog)
  */


  // States, Query, Navigation, and Movies
  query: string;
  page: number = 1;
  movies: Movie[];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getRouteParams();
  }

  // getRouteParams from search bar component
  getRouteParams() {
    this.route.params.subscribe(response => {
      this.query = response.searchQuery;
      if(response) {
        this.searchMovies(this.query, this.page)
      }
    })
  }

  // searchMovies movies based on query and page
  searchMovies(query: string, page: number) {
    this.searchService.searchMovies(query, page)
      .subscribe(response => {
        this.movies = response.results;
      })
  }

}

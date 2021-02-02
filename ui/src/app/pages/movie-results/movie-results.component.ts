import { DetailsComponent } from './../../shared/details/details.component';
import { Movie } from './../../core/models/popularMovies';
import { SearchService } from './../../core/services/search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.scss']
})
export class MovieResultsComponent implements OnInit {

  /*
  TODO:

    Intended user navigation will be:
    User hits home via root domain, home page shows about infographic and carousel component cool 3d whoosh
    That page MIGHT have a search bar? maybe, or a button that says "get started and it opens nav bar"

    from there the user searches a movie from the navbar global state -> search component redirects to this movie-results component
    sends the query data, has loading spinner or splash, queries and shows the movies in cards popularity title etc

    from there if the user clicks on a card, a dialog will popup with more DETAILEd information (mat-dialog)
  */


  // States, Query, Navigation, and Movies
  query: string;
  movies: Movie[];
  page: number = 1;
  loading: boolean;
  total_results: number;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private searchService: SearchService
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
    this.loading = true;

    this.searchService.searchMovies(query, page)
      .subscribe(response => {
        this.movies = response.results;
        this.total_results = response.total_results
        this.loading = false;
      })
  }

  // showDetails opens a material dialog showing details of the movie
  showDetails(movie: Movie) {
    this.dialog.open(DetailsComponent, {
      data: movie.id,
      disableClose: false,
      scrollStrategy: new NoopScrollStrategy
    })
  }
}

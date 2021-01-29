import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.scss']
})
export class MovieResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

}

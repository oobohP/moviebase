import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moviebase';

    /*
  Intended user interaction:
    Intended user navigation will be:
    User hits home via root domain, home page shows about infographic and carousel component cool 3d whoosh
    That page MIGHT have a search bar? maybe, or a button that says "get started and it opens nav bar"

    from there the user searches a movie from the navbar global state -> search component redirects to this movie-results component
    sends the query data, has loading spinner or splash, queries and shows the movies in cards popularity title etc

    from there if the user clicks on a card, a dialog will popup with more DETAILEd information (mat-dialog)

  TODO:
  ADD SPINNER AND REMOVE BUG WHERE PLACEHOLDER SHOWS BEFORE OBSERVABLE IS LOADED ON DETAILS COMPONENT

  OPEN SEARCH BAR WHEN USER CLICKS ON BREADCRUMB FOR MAGNIFYING GLASS/SEARCH QUERY (SERVICE)

  IMPLEMENT USER ACCOUNTS :(
  */
}

import { MovieDetail } from './../../core/models/movieDetail';
import { SearchService } from './../../core/services/search.service';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  movie: MovieDetail;

  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    private searchService: SearchService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit(): void {
    this.getDetails();
  }

  // getDetails gets details for movies that will be loaded in the details dialog
  getDetails() {
    this.searchService.searchDetails(this.data)
    .subscribe(response => {
      this.movie = response;
    })
  }

}

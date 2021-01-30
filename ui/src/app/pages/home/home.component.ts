import { SearchStatusService } from './../../core/services/search-status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private searchStatusService: SearchStatusService
  ) { }

  ngOnInit(): void {
  }

  // Onclick changes that state of the navbar search and shows the navbar when user clicks get started
  onClick(status: boolean) {
    this.searchStatusService.changeSearchStatus(status);
  }
}

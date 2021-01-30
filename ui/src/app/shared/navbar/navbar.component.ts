import { SearchStatusService } from './../../core/services/search-status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showSearch: boolean;

  constructor(
    private searchStatus: SearchStatusService
  ) { }

  ngOnInit() {
    this.searchStatus.currentSearchStatus.subscribe(response => {
      this.showSearch = response;
    });
  }

  // onSearchClick toggles the search bar and changes the search icon to X
  onSearchClick() {
    this.showSearch = !this.showSearch;
  }
}

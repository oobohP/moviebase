import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  showSearch: boolean;

  ngOnInit(): void {

  }

  // onSearchClick toggles the search bar and changes the search icon to X
  onSearchClick() {
    this.showSearch = !this.showSearch;
  }
}

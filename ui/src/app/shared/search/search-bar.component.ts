import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  searchForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private router: Router
    ) {

      // Initiating the form
    this.searchForm = this.fb.group({
      searchQuery: ''
    })
  }

  // Routes to search results page and sends form value as query
  onSubmit() {
    this.router.navigate(['search', this.searchForm.value.searchQuery])
  }
}

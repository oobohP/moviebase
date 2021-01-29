import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder) {

      // Initiating the form
    this.searchForm = this.fb.group({
      searchQuery: ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.searchForm.value);
  }
}

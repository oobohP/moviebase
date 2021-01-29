import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Pages
import { HomeComponent } from './home/home.component';
import { MovieResultsComponent } from './movie-results/movie-results.component';

@NgModule({
  declarations: [
    MovieResultsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [
  ],
})
export class PagesModule { }

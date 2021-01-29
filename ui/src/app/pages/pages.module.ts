import { RouterModule } from '@angular/router';
import { MovieResultsComponent } from './movie-results/movie-results.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

// Pages

@NgModule({
  declarations: [
    MovieResultsComponent,
    HomeComponent,
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  providers: [

  ],
})
export class PagesModule { }

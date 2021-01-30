import { PopularMovies } from './popularMovies';

export interface SearchResults extends PopularMovies{
  page: number;
}

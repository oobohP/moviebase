import { Movie } from './popularMovies';

export interface MovieDetail extends Movie{
  belongs_to_collection?: {};
  budget?: {};
  homepage?: string;
  imdb_id?: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  production_companies: Array<{
    name: string;
    id: number;
    logo_path?: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  revenue: number;
  runtime?: number;
  spoken_languages: Array<{
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string;
  video: boolean;
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmQzMzRiYWEyOTU5NTQ4MzUyM2EwYjdiNjA5ZjFhMSIsInN1YiI6IjY0OWNjZDUxYzlkYmY5MDBhY2I5YjJkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72HBsy_ra24c8nz7EnPK4tKyI7una4UUpxsa8ym-fr0'
    }
  };

  genres = 'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR';
  movieSearched: string = '';

  constructor(private http: HttpClient) { }

  getAllGenres() {
    return this.http.get<Response>(this.genres, this.options)
  }

  getMoviesWithGenres(genresId: any){
    console.log('genresID', genresId)
    const urlFormated = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genresId}`
    return this.http.get<Response>(urlFormated, this.options)
  }

  getNowPlaying() {
    return this.http.get<Response>(this.movies, this.options)
  }

  getSearchedMovie(param: string){
    const paramFormatted = param.split(' ').join("%")
    this.movieSearched = `https://api.themoviedb.org/3/search/movie?query=${paramFormatted}`
    return this.http.get<Response>(this.movieSearched, this.options)
  }

  getMovieDetail(param: string){
    const movieDetailURL = `https://api.themoviedb.org/3/movie/${param}?language=pt-BR`
    return this.http.get<Response>(movieDetailURL, this.options)
  }
}

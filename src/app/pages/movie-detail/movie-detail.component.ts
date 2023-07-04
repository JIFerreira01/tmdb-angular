import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{

  inscricao: Subscription = new Subscription();
  movieID: number = 0;
  movieDetail: Object = new Object();

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
    ) {

  }

  ngOnInit(): void {
    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.movieID = queryParams['id']
    })
  }

  async callService(genreId?: number) {
    await this.movieService.getMoviesWithGenres(genreId).subscribe({
      next: (data: any) => this.movieDetail = data.results,
      error: (error) => ( console.error('error', error) )
    })
  }

  verifyStateOfURL() {    
    if(this.movieID) {
      this.callService(this.movieID);
    } else {
      this.callService();
    }
  }

}

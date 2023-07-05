import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  movieDetail: any = new Object();
  handleAnnouncements: any;
  errorDispatched: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MoviesService
    ) {

  }

  ngOnInit(): void {
    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.movieID = queryParams['id'];
    })
    this.verifyStateOfURL()
  }

  callService(genreId?: any) {
    this.movieService.getMovieDetail(genreId).subscribe({
      next: (data: any) => {
        this.movieDetail = data
        console.log(this.movieDetail)
      },
      error: (error) => ( this.handleAnnouncements = 'no_results', this.errorDispatched = true )
    })
  }

  convertMinsToHrsMins = function (minutes: any) {
    let hour: any = Math.floor(minutes / 60);
    let minute: any = minutes % 60;
    hour = hour < 10 ? '0' + hour : hour; 
    minute = minute < 10 ? '0' + minute : minute; 
    return `${hour}h ${minute}m`;
  }

  verifyStateOfURL() {    
    if(this.movieID) {
      this.callService(this.movieID);
    } else {
      this.router.navigate(['/genres'])
    }
  }

}

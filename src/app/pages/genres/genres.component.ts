import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesService } from '../../shared/movies.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})

export class GenresComponent implements OnInit, OnDestroy {

  genresList: Array<any> = [];
  movieID: number = 0;
  inscricao: Subscription = new Subscription();

  constructor(private routes: ActivatedRoute, private service: MoviesService, private router: Router){
    this.router.events.subscribe((route) => console.log('verificando de emit algo mesmo', route))
  }

  ngOnInit(): void {
    this.inscricao = this.routes.queryParams.subscribe((queryParams: any) => {
      this.movieID = queryParams['id'];
      this.verifyStateOfURL();
    })
  }

  async callService(genreId?: number) {
    await this.service.getMoviesWithGenres(genreId).subscribe({
      next: (data: any) => {
        this.genresList = data.results;
        console.log('genresList Inside callService', this.genresList)
      },
      error: (error) => ( console.error('error', error) )
    })
  }

  verifyStateOfURL() {    
    if(this.movieID) {
      this.callService(this.movieID);
    } else {
      this.callService();
      console.log('genresList after callService', this.genresList)
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}

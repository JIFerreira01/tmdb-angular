import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/movies.service'

@Component({
  selector: 'app-c-header',
  templateUrl: './c-header.component.html',
  styleUrls: ['./c-header.component.css']
})

// interface genres {
//   genres: Array<object>;
// }

export class CHeaderComponent implements OnInit {

  genres: Array<any> = [];

  constructor(
    private api: MoviesService
  ){}

  ngOnInit(): void {
      this.api.getAllGenres().subscribe({
        next: (data: any) => this.genres = data.genres,
        error: (error) => console.log('retornou error', error)
      })
  }
}

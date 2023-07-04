import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/movies.service'

@Component({
  selector: 'app-c-carousel',
  templateUrl: './c-carousel.component.html',
  styleUrls: ['./c-carousel.component.css']
})
export class CCarouselComponent implements OnInit {

  constructor(
    private service: MoviesService
  ){}

  ngOnInit(): void {
      
  }

  getServiceData() {
    this.service.getNowPlaying().subscribe({
      complete: () => console.log('completed'),
      next: (nx) => console.log('nx', nx),
      error: (error) => console.log('error', error)
    })
  }

}

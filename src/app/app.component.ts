import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tmdb';

  constructor(
  ){}

  ngOnInit(): void {

  }
}

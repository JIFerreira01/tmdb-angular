import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../shared/movies.service';

interface chipObject {
  id: number,
  name: string
}

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})

export class GenresComponent implements OnInit {

  genresList: Array<any> = [];
  displaySpinner: Boolean = false;
  handleAnnouncements: any;
  
  constructor(private service: MoviesService){}

  ngOnInit(): void {
  }

  getChipSelected() {
    return document.getElementsByClassName("mat-mdc-chip-selected")[0];
  }

  callService(genresId: number) {
    this.displaySpinner = true;
    this.service.getMoviesWithGenres(genresId).subscribe({
      next: (data: any) => {
        if(data.total_results > 0){
          this.genresList = [];
          this.genresList = data.results;
          this.displaySpinner = false
        } else {
          this.handleAnnouncements = 'no_results'
        }
      },
      error: (error) => ( console.error('error', error) )
    })
  }

  verifyChipSelected(paramId: chipObject){
    let getTextChipSelected: any = '';
    if(this.getChipSelected()){
      getTextChipSelected = this.getChipSelected().querySelectorAll(".mdc-evolution-chip__text-label")[0].textContent;
      if(getTextChipSelected == paramId.name){
        this.genresList = [];
      } else {
        this.callService(paramId.id);
      }
    } else {
      this.callService(paramId.id);
    }
  }

  handleChipIfDataSearchIsCall(){

    if(this.getChipSelected()){
      const buttonChipSelected = this.getChipSelected().querySelector("button");
      buttonChipSelected?.dispatchEvent(new Event("click"))
    }
  }

  receiveDataToSearch($event: any){
    const dataFormatted = $event.value.split(" ").join("%");

    this.genresList = [];
    this.displaySpinner = true
    this.service.getSearchedMovie(dataFormatted).subscribe({
      next: (data: any) => {
        if(data.total_results > 0){
          this.genresList = data.results;
          this.displaySpinner = false
        } else {
          this.handleAnnouncements = 'no_results'
        }
      },
      error: (error) => ( console.error('error', error) )
    })
    this.handleChipIfDataSearchIsCall();
  }

}

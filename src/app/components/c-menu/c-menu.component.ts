import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MoviesService } from 'src/app/shared/movies.service';

interface structureGenres {
  id: number,
  name: string
}

@Component({
  selector: 'app-c-menu',
  templateUrl: './c-menu.component.html',
  styleUrls: ['./c-menu.component.css']
})


export class CMenuComponent implements OnInit {

  genresList: Array<structureGenres> = [];
  inputSearch: FormControl = new FormControl('');
  buttonSearchStatus: Boolean = true;

  constructor(private service: MoviesService){
    this.inputSearch.valueChanges.subscribe((changes) => {
      changes === "" ? this.buttonSearchStatus = true : this.buttonSearchStatus = false;
    })
  }

  @Output() search = new EventEmitter<any>();
  @Output() chipSelect = new EventEmitter<any>();

  ngOnInit(): void {
    this.callService();
  }

  callService() {
    this.service.getAllGenres().subscribe({
      next: (data: any) => this.genresList = data.genres,
      error: (error) => ( console.error('error', error) )
    })
  }

  handleInputSearch() {
    this.search.emit(this.inputSearch)
  }

  handleChips(chip: Object) {
    this.chipSelect.emit(chip)
  }
}

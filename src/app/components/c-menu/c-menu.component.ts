import { AfterContentChecked, Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

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


export class CMenuComponent implements OnInit, AfterContentChecked {

  genresList: Array<structureGenres> = [];
  inscricao: Subscription = new Subscription();
  subscription: Subscription = new Subscription();
  browserRefresh = false;
  movieID: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private service: MoviesService){
    // this.subscription = router.events.subscribe((event) => {
    //   if(event instanceof NavigationStart) {
    //     this.browserRefresh = router.navigated;
    //     console.log('refresh na pagina')
    //   }
    // })
  }

  ngOnInit(): void {
    this.callService();
    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.movieID = queryParams['id']
    })
  }

  ngAfterContentChecked(): void {
      this.genresList.length > 0 ? this.handleListChips() : null;
      if(this.browserRefresh){
        console.log('refresh na pagina')
      }
  }

  async callService() {
    await this.service.getAllGenres().subscribe({
      next: (data: any) => this.genresList = data.genres,
      error: (error) => ( console.error('error', error) )
    })
  }

  handleListChips() {
    // const idGenres: number = this.movieID;
    // let objectGenreSelected: any = new Object();
    // let getChipsThatWillSet = document.getElementsByClassName('mdc-evolution-chip-set__chips');

    // if(idGenres && getChipsThatWillSet[0].childNodes.length > 0){
    //   objectGenreSelected = this.genresList.find((id) => id.id == idGenres ? id : false)
      // for(let i = 0; i <= getChipsThatWillSet[0].childNodes.lenth; )
      // getChipsThatWillSet[0].childNodes.forEach((each) => {
      //   if(each.textContent == objectGenreSelected.name){
      //     each.dispatchEvent(new Event('click'));
      //   }
      //   return false;
      // })
    //   console.log('objectGenreSelected', objectGenreSelected)
    // }

    // console.log('contem ID', this.movieID)
    // console.log('genresList carregado', this.genresList)
  }

  handleChips(a: any) {
    console.log('hndleChips', a)
  }
}

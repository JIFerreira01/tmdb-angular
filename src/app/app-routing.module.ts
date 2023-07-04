import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component'
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: 'genres',
    component: GenresComponent,
    children: [
      {
        path: ':id',
        component: GenresComponent
      }
    ]
  },
  {
    path: 'movie-detail',
    component: MovieDetailComponent,
    children: [
      {
        path: ':id',
        component: MovieDetailComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'genres'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

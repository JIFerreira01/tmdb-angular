import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { CCarouselComponent } from './components/c-carousel/c-carousel.component';
import { GenresComponent } from './pages/genres/genres.component';
import { CHeaderComponent } from './components/c-header/c-header.component';
import { CMenuComponent } from './components/c-menu/c-menu.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { CAnnouncementsComponent } from './components/c-announcements/c-announcements.component';

@NgModule({
  declarations: [
    AppComponent,
    CCarouselComponent,
    GenresComponent,
    CHeaderComponent,
    CMenuComponent,
    MovieDetailComponent,
    CAnnouncementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }

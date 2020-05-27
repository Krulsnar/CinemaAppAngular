import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenreComponent } from './components/genre/genre.component';
import { MovieComponent } from './components/movie/movie.component';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie.component';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';
import { ShowComponent } from './components/show/show.component';
import { ShowDescriptionComponent } from './components/show-description/show-description.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    MovieComponent,
    AdminMovieComponent,
    MovieDescriptionComponent,
    ShowComponent,
    ShowDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

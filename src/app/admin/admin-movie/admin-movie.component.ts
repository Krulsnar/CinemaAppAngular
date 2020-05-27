import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { HttpService } from 'src/app/service/http.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrls: ['./admin-movie.component.css']
})
export class AdminMovieComponent implements OnInit {

  movie: Movie;
  constructor(private service:HttpService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.movie = new Movie();
  }

  searchMovies(){
    this.service.searchMovie(this.movie.title).subscribe(
      (movie) => {this.movie = movie 
      }
    )
  }

  updateMovie(){
    this.service.updateMovie(1).subscribe(
    )
  }

  createMovie(){
    alert("test")
  }
}

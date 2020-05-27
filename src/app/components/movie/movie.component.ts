import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';
import { Genre } from 'src/app/model/Genre';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router'
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieId     : number;
  title       : string;
  movieLength : number;
  releaseDate : Date;
  director    : string;
  description : string;
  imgUrl      : string;
  url         : string;
  ageToWatch  : number;
  moviegenre  : any[];
  temp        : any[];

  movies : Movie[];
  genres : Genre[];

  public user : User;

  constructor(private service:HttpService, private router: Router) { }

  ngOnInit(): void {
    this.service.getMovies().subscribe(arg => this.movies = arg);

    this.movies = [];

    this.user = JSON.parse(localStorage.getItem('User'));
  }

  onSelect(movieId: any) {
    this.router.navigate(['/movie', movieId]);
  }

  //Post movie
  addMovie(){

  }

  //delete movie
  deleteMovie(movieToDelete:number){
    
  }

  //put movie
  updateMovie(){

  }

  
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/Movie';
import { HttpService } from 'src/app/service/http.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {

  public moviesId;
  movie: Movie;
  date: string;

  movieWithGerne: any;

  constructor(private service:HttpService, private route: ActivatedRoute, public datepipe: DatePipe) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.moviesId = id;

    this.service.getMovieWithGenre(this.moviesId).subscribe(arg => {
      this.movie = arg;
    })
  }

  convertTime(time:number) {
    var num = time;
    var hours = (num / 60);
    var roundHours = Math.floor(hours);
    var minutes = (hours - roundHours) * 60;
    var roundMinutes = Math.round(minutes);

    return roundHours + " hour(s) and " + roundMinutes + " minute(s).";
  }
}

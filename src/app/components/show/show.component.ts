import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Show } from 'src/app/model/Show';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {

  show: Show[];
  public moviesId;

  constructor(private service: HttpService, public datepipe: DatePipe, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.moviesId = id;

    console.log(this.moviesId);

    this.service.getShowsForMovie(this.moviesId).subscribe(arg => {
      this.show = arg
      console.log(this.show)
    })
  }
}

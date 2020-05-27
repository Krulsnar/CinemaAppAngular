import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Show } from 'src/app/model/Show';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {

  show: Show[];
  public moviesId;
  public showId;

  constructor(
    private service: HttpService, 
    public datepipe: DatePipe, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.moviesId = id;

    this.service.getShowsForMovie(this.moviesId).subscribe(arg => {
      this.show = arg;
    })
  }

  onSelect(showId: any) {
    this.router.navigate(['/show', showId]);
  }
}

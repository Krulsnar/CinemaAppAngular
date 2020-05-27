import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-description',
  templateUrl: './show-description.component.html',
  styleUrls: ['./show-description.component.css']
})
export class ShowDescriptionComponent implements OnInit {

  constructor(private service: HttpService, private route: ActivatedRoute) { }

  public showId;

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.showId = id;
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Genre } from 'src/app/model/Genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres : Genre[];
  constructor(private service:HttpService) { }

  ngOnInit(): void {
 }
}
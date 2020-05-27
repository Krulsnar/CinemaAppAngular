import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.css']
})
export class UserDescriptionComponent implements OnInit {

  user : User;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('User'));
  }

  createUser(){

  }
}

import { Component, OnInit } from '@angular/core';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client-side-app';

  user: User;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('User'));
    console.log(this.user);
  }

  signOut() {
    localStorage.clear();
    window.location.reload();
  }
}
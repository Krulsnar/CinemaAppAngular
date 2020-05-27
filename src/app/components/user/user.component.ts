import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User;
  constructor(private service: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();

  }

  logIn(username: string, password: string) {
    this.service.getAutenticationUser(username, password).subscribe(arg =>{
      this.user = arg;
      
      if (this.user != null)
      {
        localStorage.setItem('User', JSON.stringify(this.user))

        this.routeMovie();
      }
    })
  }

  routeMovie() {
    this.router.navigate(['/movie']);
    window.location.reload();
  }

  routeUserDescription() {
    this.router.navigate(['/profile']);
  }
}

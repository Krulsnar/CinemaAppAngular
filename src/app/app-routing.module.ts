import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie.component';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';


const routes: Routes = [
  {path:"appComponent", component:AppComponent},
  {path:"adminMovie", component:AdminMovieComponent},
  {path:"movie", component:MovieComponent},
  {path:"movie/:id", component:MovieDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

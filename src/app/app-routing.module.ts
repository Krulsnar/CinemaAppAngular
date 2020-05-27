import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie.component';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';
import { ShowDescriptionComponent } from './components/show-description/show-description.component';


const routes: Routes = [
  {path:"appComponent", component:AppComponent},
  {path:"adminMovie", component:AdminMovieComponent},
  {path:"movie", component:MovieComponent},
  {path:"movie/:id", component:MovieDescriptionComponent},
  {path:"show/:id", component:ShowDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

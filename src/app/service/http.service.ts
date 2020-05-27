import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../model/Genre'
import { Movie } from '../model/Movie'
import { Show } from '../model/Show';

const httpOptions = {
    headers : new HttpHeaders({
        'Content-Type' : 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    url : string = 'https://localhost:44345/api/movies'
    urlStart : string = 'https://localhost:44345/api/'
    constructor(private http:HttpClient) {

    }

    getGenres():Observable<Genre[]>{
        return this.http.get<Genre[]>(`${this.urlStart}genres`);
    }

    getMovies():Observable<Movie[]>{
        return this.http.get<Movie[]>(`${this.urlStart}movie`);
    }

    getMovie(movieIdFromHtml: number):Observable<Movie>{
        return this.http.get<Movie>(`${this.urlStart}movie/${movieIdFromHtml}`);
    }

    searchMovie(searchMovie:string):Observable<Movie>{
        return this.http.get<Movie>(`${this.urlStart}movie/search?title=${searchMovie}`, httpOptions);
    }

    postMovie(movieToAdd:any):Observable<Movie>{
        return this.http.post<Movie>(`${this.urlStart}movie`, movieToAdd, httpOptions);
    }

    updateMovie(movieIdFromHtml:number):Observable<Movie>{
        return this.http.put<Movie>(`${this.urlStart}movie/${movieIdFromHtml}`, httpOptions);
    }

    getMovieWithGenre(movieIdFromHtml: number):Observable<Movie>{
        return this.http.get<Movie>(`${this.urlStart}movie/withGenre/${movieIdFromHtml}`)
    }

    getShowsForMovie(movieId: number):Observable<Show[]>{
        return this.http.get<Show[]>(`${this.urlStart}show/movie/${movieId}`);
    }

}
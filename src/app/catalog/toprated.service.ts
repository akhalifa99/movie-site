import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class TopratedService {
  
  movies!:Movie;
  url: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key=eea415e0b7d5bbde4000f7318ef220b7&language=en-US&page=1'
  
  constructor( private http: HttpClient) { }

  getTopRated():Observable<Movie>{
    this.http.get<Movie>(this.url).subscribe(res=>{
      this.movies=res
    })
    return this.http.get<Movie>(this.url)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TopratedService {
  
  movies!:Movie;
  url: string = 'https://api.themoviedb.org/3/movie/top_rated?api_key='+environment.Api_key;
  
  constructor( private http: HttpClient) { }

  getTopRated():Observable<Movie>{
    this.http.get<Movie>(this.url).subscribe(res=>{
      this.movies=res
    })
    return this.http.get<Movie>(this.url)
  }
}

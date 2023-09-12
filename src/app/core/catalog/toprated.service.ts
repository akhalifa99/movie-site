import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopratedService {
  
  movies!:Movie;
  url: string = environment.URL;
  
  constructor( private http: HttpClient) { }

  getTopRated():Observable<Movie>{
    this.http.get<Movie>(this.url).subscribe(res=>{
      this.movies=res
      console.log(this.url)
    })
    return this.http.get<Movie>(this.url)
  }
}

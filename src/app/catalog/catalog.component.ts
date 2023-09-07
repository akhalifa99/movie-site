import { Component, OnInit } from '@angular/core';
import { TopratedService } from './toprated.service';
import { Movie } from '../models/movie';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  topRatedMovies !: Movie;
  
  constructor(private toprated:TopratedService){

  }
  
  ngOnInit(): void {
    this.showTopRated()
  }

  showTopRated(){
    this.toprated.getTopRated().subscribe(res=>{
      this.topRatedMovies=this.correctBackDropPath(res);
    },
    err=>{
      console.log(err)
    });
  }
  
  correctBackDropPath(movie:Movie):Movie{
    if(movie.results){
      movie.results.forEach(result=>{
        result.backdrop_path='https://image.tmdb.org/t/p/w500'+result.backdrop_path+'?api_key=eea415e0b7d5bbde4000f7318ef220b7'
        })
        
    }
    return movie;
  }
}

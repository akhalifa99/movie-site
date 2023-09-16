import { Component, OnInit } from '@angular/core';
import { TopratedService } from '../../services/toprated.service';
import { Movie } from '../../models/movie';
import { environment } from 'src/environments/environment.prod';



@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  topRatedMovies !: Movie;
  fetching:boolean=true;
  
  constructor(private toprated:TopratedService){

  }
  
  ngOnInit(): void {
    this.showTopRated()
  }



  showTopRated(){
    this.toprated.getTopRated().subscribe({
      next:res=>this.topRatedMovies=this.correctBackDropPath(res),
      error:err=>console.log(err)
    });
    this.fetching=false;
  }
  
  correctBackDropPath(movie:Movie):Movie{
    if(movie.results){
      movie.results.forEach(result=>{
        result.backdrop_path='https://image.tmdb.org/t/p/w500'+result.backdrop_path+'?api_key='+environment.Api_key
        })
        
    }
  
    return movie;
  }
}

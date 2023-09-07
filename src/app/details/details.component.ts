import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { movieDetails } from '../models/movieDetails';
import { TopratedService } from '../catalog/toprated.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number
  movie !: movieDetails;
  

constructor(private route:ActivatedRoute, private http: HttpClient, private mService: TopratedService){}

movies=this.mService.movies

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.showDetails()

  }

  showDetails(){
    this.http.get<movieDetails>('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=eea415e0b7d5bbde4000f7318ef220b7').subscribe(res=>{
      this.movie=res
      this.movie.backdrop_path= 'https://image.tmdb.org/t/p/w500'+this.movie.backdrop_path+'?api_key=eea415e0b7d5bbde4000f7318ef220b7'
      
    },
    err=>{
      console.log(err)
    });
  }



}

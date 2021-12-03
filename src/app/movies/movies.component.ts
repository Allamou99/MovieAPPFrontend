import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {imgurl} from '../url';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService : MoviesService) { }
  url = imgurl;
  jpg = '.jpg';
  films : any
  searchedMovie : any;
  ngOnInit(): void {
    this.movieService.allMovies()
    .subscribe(movies=>this.films = movies);
  }


  onChange(newValue : any) {
    console.log(newValue);
    this.searchedMovie = newValue;
    this.movieService.getMovieBySearchName(this.searchedMovie)
    .subscribe(ListMovie=>this.films = ListMovie)
   // don't forget to update the model here
    // ... do other stuff here ...
}

addTofavories(id : String){
  this.movieService.addToFavories(id)
  .subscribe(res=>console.log(res));
}
}

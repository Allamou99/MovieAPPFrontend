import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import {imgurl} from '../url';

@Component({
  selector: 'app-details-films',
  templateUrl: './details-films.component.html',
  styleUrls: ['./details-films.component.scss']
})
export class DetailsFilmsComponent implements OnInit , OnDestroy {

  id?: any;
  private sub: any;
  detailedFilm : any;
  url = imgurl;
  jpg = '.jpg';
  constructor(private route: ActivatedRoute,
    private MoviesService : MoviesService) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; 
       console.log(params['id']);
    });
    this.MoviesService.getMovieById(this.id)
    .subscribe(film=>{
      this.detailedFilm = film;
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

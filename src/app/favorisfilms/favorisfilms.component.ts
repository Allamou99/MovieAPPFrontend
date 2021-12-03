import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {imgurl} from '../url';

@Component({
  selector: 'app-favorisfilms',
  templateUrl: './favorisfilms.component.html',
  styleUrls: ['./favorisfilms.component.scss']
})
export class FavorisfilmsComponent implements OnInit {
  favoriesMovie : any;
  url = imgurl;
  jpg = '.jpg';
  constructor(private MoviesService : MoviesService) { }

  ngOnInit(): void {
    this.MoviesService.getAllfavories()
    .subscribe(favories=>{this.favoriesMovie = favories; 
    console.log(favories)});
  }

  removeFavorie(filmid : any){

  }

}

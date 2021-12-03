import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {url} from '../url';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) {
   }

   allMovies() : Observable<any>{
     return this.http.get<any>(url+"/movies")
   }

   getMovieBySearchName(searchName : String)  : Observable<any>{
    return this.http.get<any>(url + "/movies/"+searchName)
   }

   getMovieById(id : String)  : Observable<any>{
    return this.http.get<any>(url + "/movies/findid/"+id)
   }

   addToFavories(filmId : any) : Observable<any>{
    return this.http.post<any>(url+"/favories/"+filmId, null  )
   }

   getAllfavories(): Observable<any>{
    return this.http.get<any>(url+"/favories");
   }

   getAllFavoriesMovies() : Observable<any>{
    return this.http.get<any>(url+"/favories")
   }

   
}

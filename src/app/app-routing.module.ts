import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { FavorisfilmsComponent } from './favorisfilms/favorisfilms.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { DetailsFilmsComponent } from './details-films/details-films.component';
const routes: Routes = [
  {path:'movies' , component:MoviesComponent},
  {path:'favoris', component:FavorisfilmsComponent, canActivate : [AuthGuard]},
  {path:'signup',component:AuthComponent},
  {path:'login',component:LoginComponent},
  {path:'film-details/:id', component:DetailsFilmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FavorisfilmsComponent } from './favorisfilms/favorisfilms.component';
import { AuthComponent } from './auth/auth.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor, UnauthorizedInterceptor } from './services/aut.interceptor';
import { DetailsFilmsComponent } from './details-films/details-films.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent,
    FavorisfilmsComponent,
    AuthComponent,
    LoginComponent,
    DetailsFilmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

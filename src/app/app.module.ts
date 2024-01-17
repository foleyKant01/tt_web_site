import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutes, routes } from './app.routes';
import { NotfoundComponent } from './notfound/notfound.component';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: []
})


export class AppModule { }

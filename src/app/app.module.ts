import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { BodyComponent } from './MyComponents/body/body.component';
import { EntertainmentComponent } from './MyComponents/entertainment/entertainment.component';
import { HealthComponent } from './MyComponents/health/health.component';
import { ScienceComponent } from './MyComponents/science/science.component';
import { TechnologyComponent } from './MyComponents/technology/technology.component';
import { SportsComponent } from './MyComponents/sports/sports.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    EntertainmentComponent,
    HealthComponent,
    ScienceComponent,
    TechnologyComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

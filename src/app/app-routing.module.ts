import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './MyComponents/body/body.component';
import { EntertainmentComponent } from './MyComponents/entertainment/entertainment.component';
import { HealthComponent } from './MyComponents/health/health.component';
import { ScienceComponent } from './MyComponents/science/science.component';
import { SportsComponent } from './MyComponents/sports/sports.component';
import { TechnologyComponent } from './MyComponents/technology/technology.component';

const routes: Routes = [
  {
    path:'', component:BodyComponent
  },
  {
    path:'entertainment', component:EntertainmentComponent
  },
  {
    path:'health', component:HealthComponent
  },
  {
    path:'science', component:ScienceComponent
  }, 
  {
    path:'sports', component:SportsComponent
  },
  {
    path:'technology', component:TechnologyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

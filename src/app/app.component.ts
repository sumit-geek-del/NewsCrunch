import { Component } from '@angular/core';

import {ApiService} from 'src/app/API/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie_love';

constructor(private data:ApiService){}
  ngOnInit(){

    

  }

}
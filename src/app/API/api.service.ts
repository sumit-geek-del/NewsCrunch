import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private data:HttpClient) { }

  newsData(){
    const data = this.data.get('https://newsapi.org/v2/everything?q=politics&apiKey=0a7df79493664fd3a89672b25e6ea6b4');
    return data;
  }

  newsByCategory(category:any){
    const data = this.data.get(`https://newsapi.org/v2/top-headlines?country=de&category=${category}&apiKey=0a7df79493664fd3a89672b25e6ea6b4`);
    return data;
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '108345aa25cc452a8f42b1bb62cf4fe0'

  constructor(private data:HttpClient) { }

  newsData(){
    const data = this.data.get(`https://newsapi.org/v2/everything?q=politics&apiKey=${this.API_KEY}`);
    return data;
  }

  newsByCategory(category:any){
    const data = this.data.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${this.API_KEY}`);
    return data;
  }

  newsDataIndia(){
    const data = this.data.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.API_KEY}`);
    return data;
  }

}

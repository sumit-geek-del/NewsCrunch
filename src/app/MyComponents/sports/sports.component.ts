import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/API/api.service'

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  newArticles:any = [
    {
      source:'',
      author:'',
      title:'',
      urlToImage:'',
      description:'',
      url:'',
      publishedAt:''

    }
  ]

  constructor(private data : ApiService) { }

  ngOnInit(): void {
    this.newArticles.pop();

    this.data.newsByCategory('sports').subscribe((res:any)=>{
      const data1 = res;
      console.log(data1.articles);

      for(let items of data1.articles){
        this.newArticles.push({source:items.source.name, author:items.author, title:items.title, urlToImage:items.urlToImage, description:items.description, url:items.url, publishedAt:items.publishedAt});
        
      }   
      
    })
  }

}

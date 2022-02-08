import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/API/api.service'

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
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

    this.data.newsByCategory('technology').subscribe((res:any)=>{
      const data1 = res;


      for(let items of data1.articles){
        this.newArticles.push({source:items.source.name, author:items.author, title:items.title, urlToImage:items.urlToImage, description:items.description, url:items.url, publishedAt:items.publishedAt});
        
      }   
      
    })
  }

}

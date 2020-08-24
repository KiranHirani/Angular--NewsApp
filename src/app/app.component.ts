import { Component } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
   articles:any[]=[];
   categoryArticles:any[]=[];
   category:string='';

  constructor(private newsService:NewsService){}

  getNews()
  {
    this.newsService.getAll().subscribe(data=>this.articles.push(data));
  }

  getCategory(category:string)
  {
    this.newsService.getCategory(category).subscribe(data=>
      this.categoryArticles.push(data['articles']));
      this.categoryArticles=[];
  }

}

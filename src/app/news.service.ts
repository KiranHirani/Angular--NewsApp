import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  apiKey='0265a008844240df93f1e5fb8e392606';
  url='https://newsapi.org/v2/top-headlines?';

  getAll()
  {
     return this.http.get(`${this.url}country=in&apiKey=${this.apiKey}`);
  }
  getCategory(category)
  {
    return this.http.get(`${this.url}country=in&category=${category}&apiKey=${this.apiKey}`);
  }

}

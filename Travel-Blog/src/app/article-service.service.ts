import { Injectable } from '@angular/core';
import {Articles} from '../assets/Class/Articles';
import {Article} from '../assets/Class/Article';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor() { }
  getArticles(): Article[] {
    return Articles;
  }
  
  getArticle(id: number): Observable<Article> {
    return of(Articles.find(article => article.ID === id));
  }
  

}

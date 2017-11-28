import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Article, deserialiseArticles, RawArticle } from '../../lib/models/article';

@Injectable()
export class ArticleService {
  private dateToday = new Date();
  private dateString = `${this.dateToday.getFullYear()}-${this.dateToday.getMonth() + 1}-${this.dateToday.getDate()}`;

  readonly articlesToday= 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=' +
    'http://content.guardianapis.com/search?show-fields=all&from-date=' + this.dateString;

  private articleSubject = new ReplaySubject<Article[]>();
  articles$ = this.articleSubject.asObservable();

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get(this.articlesToday)
      .map((resp: RawArticle[]) => deserialiseArticles(resp))
      .subscribe((articles: Article[]) => this.articleSubject.next(articles));
  }
}

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ArticleService } from './article.service';
import { Article } from '../../lib/models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.fetch();
  }

  get articles$(): Observable<Article[]> {
    return this.articleService.articles$;
  }

}

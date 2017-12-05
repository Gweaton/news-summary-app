import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Article } from '../../lib/models/article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title= 'Guardian Summariser';

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.fetch();
  }

  get articles$(): Observable<Article[]> {
    return this.articleService.articles$;
  }

}

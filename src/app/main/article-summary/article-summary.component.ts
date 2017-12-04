import { Component, OnInit } from '@angular/core';
import { Article } from '../../../lib/models/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-article-summary',
  templateUrl: './article-summary.component.html',
  styleUrls: ['./article-summary.component.css']
})
export class ArticleSummaryComponent implements OnInit {
  article$: Observable<Article>;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.articleService.getArticle(this.route.snapshot.paramMap.get('id'));
    this.article$ = this.articleService.foundArticle$;
  }
}

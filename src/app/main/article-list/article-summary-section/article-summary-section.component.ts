import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Article } from '../../../../lib/models/article';
import { ArticleSummaryService } from './article-summary.service';

@Component({
  selector: 'app-article-summary-section',
  templateUrl: './article-summary-section.component.html',
  styleUrls: ['./article-summary-section.component.css'],
  providers: [ ArticleSummaryService ]
})
export class ArticleSummarySectionComponent implements OnInit {
  @Input() article: Article;

  constructor(private summaryService: ArticleSummaryService) { }

  ngOnInit(): void {
    this.summaryService.getSummaryOfArticle(this.article.url);
  }

  get articleSummary$(): Observable<String[]> {
    return this.summaryService.summary$;
  }
}

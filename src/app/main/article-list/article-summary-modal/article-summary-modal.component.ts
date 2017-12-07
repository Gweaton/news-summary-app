import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Article } from '../../../../lib/models/article';
import { ArticleSummaryService } from './article-summary.service';

@Component({
  selector: 'app-article-summary-modal',
  templateUrl: './article-summary-modal.component.html',
  styleUrls: ['./article-summary-modal.component.css'],
  providers: [ ArticleSummaryService ]
})
export class ArticleSummaryModalComponent implements OnInit {
  @Input() article: Article;

  constructor(private summaryService: ArticleSummaryService) { }

  ngOnInit(): void {
    this.summaryService.getSummaryOfArticle(this.article.url);
  }

  get articleSummary$(): Observable<String[]> {
    return this.summaryService.summary$;
  }
}

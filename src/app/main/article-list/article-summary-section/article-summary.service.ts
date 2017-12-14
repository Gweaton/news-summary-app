import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { AylienSummary } from '../../../../lib/models/aylienSummary';

@Injectable()
export class ArticleSummaryService {
  readonly summaryBaseUrl = 'http://news-summary-api.herokuapp.com/aylien?' +
    'apiRequestUrl=https://api.aylien.com/api/v1/summarize?' +
    'url=';

  private summarySubject = new ReplaySubject<String[]>();
  summary$ = this.summarySubject.asObservable();

  constructor(private http: HttpClient) { }

  getSummaryOfArticle(url: string) {
    const fullUrl = this.summaryBaseUrl + url;
    return this.http.get(fullUrl).subscribe((summary: AylienSummary) => {
      this.summarySubject.next(summary.sentences);
    });
  }
}

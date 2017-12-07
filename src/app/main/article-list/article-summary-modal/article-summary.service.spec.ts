import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ArticleSummaryService } from './article-summary.service';

describe('ArticleSummaryService', () => {
  let service: ArticleSummaryService;

  let httpMock: HttpTestingController;

  const mockAylienApiResponse = {
    sentences: ['Sentence', 'Second sentence']
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ArticleSummaryService]
    });
    service = TestBed.get(ArticleSummaryService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should make a request to the Makers Academy Aylien API with an article URL and return a summary', () => {
    service.getSummaryOfArticle('www.articleone.com');
    service.summary$.subscribe((sentences: String[]) => {
        expect(sentences).toEqual(mockAylienApiResponse.sentences);
      }
    );

    const req = httpMock.expectOne('http://news-summary-api.herokuapp.com/aylien?' +
      'apiRequestUrl=https://api.aylien.com/api/v1/summarize?' +
      'url=www.articleone.com');

    expect(req.request.method).toBe('GET');

    req.flush(mockAylienApiResponse);
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeadlineService } from './headline.service';
import { Article, RawArticle } from '../../lib/models/article';

describe('HeadlineService', () => {
  let service: HeadlineService;

  let httpMock: HttpTestingController;

  const mockArticles: RawArticle[] = [ {
    webTitle: 'Article 1',
    webUrl: 'www.articleone.com',
    fields: {
      headline: 'Article 1',
      body: 'Article content'
    },
  },
    {
      webTitle: 'Article 2',
      webUrl: 'www.articletwo.com',
      fields: {
        headline: 'Article 2',
        body: ''
      }
    }
  ];

  const mockResponse = {
    response: {
      results: mockArticles
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ HeadlineService ]
    });
    service = TestBed.get(HeadlineService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should make a request to the Makers Academy Guardian/Aylien API and return articles', () => {
    service.fetch();
    service.articles$.subscribe((articles: Article[]) => {
      expect(articles.length).toEqual(2);

      const firstArticle = articles[0] as Article;
      expect(firstArticle.headline).toEqual('Article 1');
      expect(firstArticle.content).toEqual('Article content');
      expect(firstArticle.url).toEqual('www.articleone.com');
    });

    const req = httpMock.expectOne(service.todayHeadlines);
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });

});

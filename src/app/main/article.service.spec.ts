import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ArticleService } from './article.service';
import { Article, RawArticle } from '../../lib/models/article';

describe('ArticleService', () => {
  let service: ArticleService;

  let httpMock: HttpTestingController;

  const mockArticles: RawArticle[] = [ {
    id: 'article1',
    webTitle: 'Article 1',
    webUrl: 'www.articleone.com',
    fields: {
      headline: 'Article 1',
      bodyText: 'Article content',
      thumbnail: 'thumbnail',
    },
  }, {
    id: 'article2',
    webTitle: 'Article 2',
    webUrl: 'www.articletwo.com',
    fields: {
      headline: 'Article 2',
      bodyText: '',
      thumbnail: 'thumbnail 2'
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
      providers: [ ArticleService ]
    });
    service = TestBed.get(ArticleService);
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
      expect(firstArticle.thumbnail).toEqual('thumbnail');
    });

    const req = httpMock.expectOne(service.articlesToday);
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});

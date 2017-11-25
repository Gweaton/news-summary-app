import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListComponent } from './article-list.component';
import { ArticleService } from './article.service';
import { Article } from '../../lib/models/article';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  let fakeArticleSubject: Subject<Article[]>;

  let articleServiceSpy: ArticleService;

  beforeEach(async(() => {
    articleServiceSpy = jasmine.createSpyObj('Article Service Spy', [ 'fetch' ]);
    fakeArticleSubject = new ReplaySubject<Article[]>();

    articleServiceSpy.articles$ = fakeArticleSubject.asObservable();

    TestBed.configureTestingModule({
      declarations: [ ArticleListComponent ],
      providers: [
        { provide: ArticleService, useValue: articleServiceSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call the ArticleService to fetch article data', () => {
    component.ngOnInit();
    expect(articleServiceSpy.fetch).toHaveBeenCalled();
  });

  describe('Displaying articles', () => {
    beforeEach(() => {
      const articles: Article[] = [
        { headline: 'Headline', url: 'www.article.com', content: 'Content of article', thumbnail: 'image' }
      ];
      fakeArticleSubject.next(articles);
      fixture.detectChanges();
    });

    it('should display article headlines', () => {
      expect(fixture.nativeElement.querySelector('.headline').textContent.trim()).toEqual('Headline');
    });

    it('should display article images', () => {
      expect(fixture.nativeElement.querySelector('.thumbnail').getAttribute('src')).toEqual(('image'));
    });
  });
});

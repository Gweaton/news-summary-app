import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { MainComponent } from './main.component';
import { ArticleService } from './article.service';
import { Article } from '../../lib/models/article';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  let fakeArticleSubject: Subject<Article[]>;
  let articleServiceSpy: ArticleService;

  articleServiceSpy = jasmine.createSpyObj('Article Service Spy', [ 'fetch' ]);
  fakeArticleSubject = new ReplaySubject<Article[]>();

  articleServiceSpy.articles$ = fakeArticleSubject.asObservable();

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      providers: [ { provide: ArticleService, useValue: articleServiceSpy } ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call the ArticleService to fetch article data', () => {
    component.ngOnInit();
    expect(articleServiceSpy.fetch).toHaveBeenCalled();
  });

  it('should expose Articles to the child component', () => {
    component.articles$.subscribe(articles => {
      expect(articles.length).toEqual(2);
      expect(articles[0].headline).toEqual('Headline');
      expect(articles[1].headline).toEqual('Headline 2');
    });

    fakeArticleSubject.next([
      { headline: 'Headline', url: 'www.article.com', content: 'Content of article', thumbnail: 'image' } as Article,
      { headline: 'Headline 2', url: 'www.article.com', content: 'Content of second article', thumbnail: 'image' } as Article
    ]);

    fixture.detectChanges();
  });
});

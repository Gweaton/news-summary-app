import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ArticleSummaryComponent } from './article-summary.component';
import { Article } from '../../../lib/models/article';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { ArticleService } from '../article.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('ArticleSummaryComponent', () => {
  let component: ArticleSummaryComponent;
  let fixture: ComponentFixture<ArticleSummaryComponent>;

  let fakeArticleSubject: Subject<Article>;

  let articleServiceSpy: ArticleService;

  const fakeArticle = {
    id: 'articleId',
    headline: 'Headline',
    url: 'www.article.com',
    content: 'Content of article',
    thumbnail: 'image'
  } as Article;


  beforeEach(async(() => {
    articleServiceSpy = jasmine.createSpyObj('Article Service Spy', ['fetch', 'getArticle']);

    fakeArticleSubject = new BehaviorSubject<Article>(fakeArticle);

    articleServiceSpy.foundArticle$ = fakeArticleSubject.asObservable();


    TestBed.configureTestingModule({
      declarations: [ ArticleSummaryComponent ],
      providers: [ { provide: ArticleService, useValue: articleServiceSpy } ],
      imports: [ RouterTestingModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call the articleService to find the displayed article', () => {
    expect(articleServiceSpy.getArticle).toHaveBeenCalled();
  });

  describe('displaying the summary of an article', () => {
    it('should display the article\'s headline', () => {
      expect(fixture.nativeElement.querySelector('.headline').textContent.trim()).toContain('Headline');
    });

    it('should display the article\'s image', () => {
      expect(fixture.nativeElement.querySelector('.thumbnail').getAttribute('src')).toEqual(('image'));
    });

    it('should display the article\'s content', () => {
      expect(fixture.nativeElement.querySelector('.content').textContent.trim()).toEqual('Content of article');
    });
  });
});

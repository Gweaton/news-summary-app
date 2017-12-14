import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ArticleListComponent } from './article-list.component';
import { Article } from '../../../lib/models/article';
import { ArticleSummarySectionComponent } from './article-summary-section/article-summary-section.component';
import { ArticleSummaryService } from './article-summary-section/article-summary.service';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  let summarySectionComponent: ArticleSummarySectionComponent;

  let articleSummaryServiceSpy: ArticleSummaryService;
  articleSummaryServiceSpy = jasmine.createSpyObj('Article Summary Service', ['getSummaryOfArticle']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticleListComponent,
        ArticleSummarySectionComponent
      ],
    });
    TestBed.overrideComponent(ArticleSummarySectionComponent, {
      set: {
        providers: [{ provide: ArticleSummaryService, useValue: articleSummaryServiceSpy }]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('Displaying articles', () => {
    beforeEach(() => {
      component.articles = [ {
        id: 'articleId',
        headline: 'Headline',
        url: 'www.article.com',
        content: 'Content of article',
        thumbnail: 'image'
      } as Article ];

      fixture.detectChanges();
    });

    it('should display article headlines', () => {
      expect(fixture.nativeElement.querySelector('.headline').textContent.trim()).toEqual('Headline');
    });

    it('should display article images', () => {
      expect(fixture.nativeElement.querySelector('.thumbnail').getAttribute('src')).toEqual(('image'));
    });

    describe('Article summary', () => {
      it('should pass each article down to the article summary section ', () => {
        summarySectionComponent = fixture.debugElement.query(By.directive(ArticleSummarySectionComponent)).componentInstance;
        fixture.detectChanges();

        expect(summarySectionComponent.article).toEqual(component.articles[0]);
      });

      it('should display the article summary', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.summary-section')).not.toBe(null);
      });
    });
  });


});

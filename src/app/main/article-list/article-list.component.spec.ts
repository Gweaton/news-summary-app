import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ArticleListComponent } from './article-list.component';
import { Article } from '../../../lib/models/article';
import { ArticleSummaryModalComponent } from './article-summary-modal/article-summary-modal.component';
import { ArticleSummaryService } from './article-summary-modal/article-summary.service';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  let modalComponent: ArticleSummaryModalComponent;

  let articleSummaryServiceSpy: ArticleSummaryService;
  articleSummaryServiceSpy = jasmine.createSpyObj('Article Summary Service', ['getSummaryOfArticle']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticleListComponent,
        ArticleSummaryModalComponent
      ],
    });
    TestBed.overrideComponent(ArticleSummaryModalComponent, {
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
      it('should pass each article down to the article modal ', () => {
        modalComponent = fixture.debugElement.query(By.directive(ArticleSummaryModalComponent)).componentInstance;
        fixture.detectChanges();

        expect(modalComponent.article).toEqual(component.articles[0]);
      });
    });
  });


});

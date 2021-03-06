import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ArticleSummarySectionComponent } from './article-summary-section.component';
import { Article } from '../../../../lib/models/article';
import { ArticleSummaryService } from './article-summary.service';

describe('ArticleSummarySectionComponent', () => {
  let component: ArticleSummarySectionComponent;
  let fixture: ComponentFixture<ArticleSummarySectionComponent>;

  let summaryServiceSpy: ArticleSummaryService;
  summaryServiceSpy = jasmine.createSpyObj('Article Service Spy', ['getSummaryOfArticle']);

  let fakeSummarySubject: Subject<String[]>;
  fakeSummarySubject = new ReplaySubject<String[]>();

  summaryServiceSpy.summary$ = fakeSummarySubject.asObservable();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSummarySectionComponent ],
    });

    TestBed.overrideComponent(ArticleSummarySectionComponent, {
      set: {
        providers: [{ provide: ArticleSummaryService, useValue: summaryServiceSpy }]
      }
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSummarySectionComponent);
    component = fixture.componentInstance;

    component.article = {
      id: 'articleId',
      headline: 'Headline',
      url: 'www.article.com',
      content: 'Content of article',
      thumbnail: 'image'
    } as Article;

    fixture.detectChanges();
  });

  describe('displaying article', () => {
    it('should display the given article\'s summary', () => {
      component.articleSummary$.subscribe();
      fakeSummarySubject.next(['Summary', 'summary 2']);
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.summary').textContent).toContain(('Summary'));
    });
  });
});

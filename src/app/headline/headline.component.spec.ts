import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineComponent } from './headline.component';
import { HeadlineService } from './headline.service';
import { Article } from '../../lib/models/article';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

describe('HeadlineComponent', () => {
  let component: HeadlineComponent;
  let fixture: ComponentFixture<HeadlineComponent>;

  let fakeArticleSubject: Subject<Article[]>;

  let headlineServiceSpy: HeadlineService;

  beforeEach(async(() => {
  headlineServiceSpy = jasmine.createSpyObj('Headline Service Spy', ['fetch']);
  fakeArticleSubject = new ReplaySubject<Article[]>();

  headlineServiceSpy.articles$ = fakeArticleSubject.asObservable();

    TestBed.configureTestingModule({
      declarations: [ HeadlineComponent ],
      providers: [
        { provide: HeadlineService, useValue: headlineServiceSpy }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call the headlineService to fetch article data', () => {
    component.ngOnInit();
    expect(headlineServiceSpy.fetch).toHaveBeenCalled();
  });

  it('should display article headlines', () => {
    const articles: Article[] = [{ headline: 'Headline', url: 'www.article.com', content: 'Content of article'}];

    fakeArticleSubject.next(articles);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.headline').textContent.trim()).toEqual('Headline');
  });
});

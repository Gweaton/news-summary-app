import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ArticleListComponent } from './article-list.component';
import { Article } from '../../../lib/models/article';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleListComponent ],
      imports: [ RouterTestingModule ]
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

    describe('Links to summaries', () => {
      it('should create a link to each article with its id', () => {
        expect(fixture.nativeElement.querySelector('a').getAttribute('href')).toEqual('/summary/articleId');
      });
    });
  });

});

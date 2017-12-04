import { browser, by, element } from 'protractor';

export class MainPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('app-root h1')).getText();
  }

  getArticleList() {
    return element(by.css('.article-list'));
  }

  getHeadlines() {
    return element(by.css('.headline'));
  }

  getImages() {
    return element(by.css('.thumbnail'));
  }

  clickFirstHeadline() {
    return element.all(by.css('.link')).first().click();
  }

  hasBeenRedirectedToArticleSummary() {
    return browser.getCurrentUrl().then(url => {
      return url.includes('summary/');
    });
  }
}

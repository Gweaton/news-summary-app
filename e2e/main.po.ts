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

  getSummary() {
    return element(by.css('.summary-section'));
  }
}

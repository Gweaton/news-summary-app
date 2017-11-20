import { browser, by, element } from 'protractor';

export class MainPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('app-root h1')).getText();
  }

  getHeadlines() {
    return element(by.css('.headline'));
  }
}

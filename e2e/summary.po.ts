import { by, element } from 'protractor';

export class SummaryPage {
  getHeadline() {
    return element(by.css('.headline'));
  }

  getImage() {
    return element(by.css('.thumbnail'));
  }

  getContent() {
    return element(by.css('.content'));
  }
}

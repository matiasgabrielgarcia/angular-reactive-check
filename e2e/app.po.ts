import { browser, element, by } from 'protractor';

export class MgarciaCheckpointBasicPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gl-root h1')).getText();
  }
}

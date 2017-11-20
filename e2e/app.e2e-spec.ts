import { MainPage } from './app.po';

describe('App', () => {
  let page: MainPage;

  beforeEach(() => {
    page = new MainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Guardian Summariser');
  });
});

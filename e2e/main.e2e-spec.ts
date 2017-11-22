import { MainPage } from './app.po';

describe('Main homepage', () => {
  const homepage = new MainPage();

  it('should display the article list', () => {
    expect(homepage.getArticleList().isPresent()).toBe(true, 'Article list should be present');
  });

  it('should display each article\'s headline', () => {
    expect(homepage.getHeadlines()).not.toBeNull();
  });
});

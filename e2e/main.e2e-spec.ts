import { MainPage } from './main.po';

describe('Main homepage', () => {
  const homepage = new MainPage();

  beforeAll(() => {
    homepage.navigateTo();
  });

  it('should display the article list', () => {
    expect(homepage.getArticleList().isPresent()).toBe(true, 'Article list should be present');
  });

  it('should display each article\'s headline', () => {
    expect(homepage.getHeadlines().isPresent()).toBe(true, 'Headlines should be displayed');
  });

  it('should display each article\'s image', () => {
    expect(homepage.getImages().isPresent()).toBe(true, 'Images should be displayed');
  });
});

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

  it('clicking an article\'s headline should take you to a dedicated page with that article\'s summarised content', () => {
    homepage.clickFirstHeadline();
    expect(homepage.hasBeenRedirectedToArticleSummary()).toBe(true, 'Should have navigated to article summary');
  });
});

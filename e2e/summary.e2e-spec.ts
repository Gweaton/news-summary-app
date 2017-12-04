import { SummaryPage } from './summary.po';
import { MainPage } from './main.po';

describe('Article summary page', () => {
  const summaryPage = new SummaryPage();
  const homepage = new MainPage();

  beforeAll(() => {
    homepage.navigateTo();
    homepage.clickFirstHeadline();
  });

  it('should display each article\'s headline', () => {
    expect(summaryPage.getHeadline().isPresent()).toBe(true, 'Headline should be displayed');
  });

  it('should display each article\'s image', () => {
    expect(summaryPage.getImage().isPresent()).toBe(true, 'Image should be displayed');
  });

  it('should display each article\'s content', () => {
    expect(summaryPage.getContent().isPresent()).toBe(true, 'Content should be displayed');
  });
});

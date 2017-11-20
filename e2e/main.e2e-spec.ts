import { MainPage } from './app.po';

describe('Main homepage', () => {
  const homepage = new MainPage();

  it('should display article headlines', () => {
    expect(homepage.getHeadlines().isPresent()).toBe(true, 'Headlines should be present');
  });
});

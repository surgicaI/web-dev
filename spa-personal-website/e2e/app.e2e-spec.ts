import { SimranjyotPage } from './app.po';

describe('simranjyot App', () => {
  let page: SimranjyotPage;

  beforeEach(() => {
    page = new SimranjyotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

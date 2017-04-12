import { BlabverifyPage } from './app.po';

describe('blabverify App', () => {
  let page: BlabverifyPage;

  beforeEach(() => {
    page = new BlabverifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

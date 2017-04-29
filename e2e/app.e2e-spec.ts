import { RiorPage } from './app.po';

describe('rior App', () => {
  let page: RiorPage;

  beforeEach(() => {
    page = new RiorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { LenguajesPage } from './app.po';

describe('lenguajes App', () => {
  let page: LenguajesPage;

  beforeEach(() => {
    page = new LenguajesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

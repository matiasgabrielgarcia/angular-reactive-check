import { MgarciaCheckpointBasicPage } from './app.po';

describe('mgarcia-checkpoint-basic App', function() {
  let page: MgarciaCheckpointBasicPage;

  beforeEach(() => {
    page = new MgarciaCheckpointBasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gl works!');
  });
});


const ui = require('../ui');
const pre_req = require('../pre_req');

console.log("started UI.test.js");
jest.setTimeout(36000000);

describe('MangoJS sample UI test', () => {
  beforeAll(async() => {
    await pre_req.ui_setup();
  });
  afterAll(async() => {
    await global.driver.quit();
  });
  test('open website', async() => {
    await ui.login.login.open_url(process.env.URL_WEB,global.sel.searchbar, function(val) {
      expect(val).toBeTruthy;
    });  
  });
});


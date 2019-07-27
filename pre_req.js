
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var webdriver = require('selenium-webdriver');
const sel = require('./selector');
const _ = require('lodash');
const utils = {
    "ui": require('./utils/ui_util'),
    "generic": require('./utils/generic')
};
const globalVariables = _.pick(global, ['sel', 'utils','generic', 'driver']);
global.utils = utils;
global.sel = sel;
require('dotenv').config();
exports.ui_setup = async () => {
    try {
        await (service = new chrome.ServiceBuilder(path).build());
        await chrome.setDefaultService(service);
        await (driver_chrome = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build());
    } catch(err) {
        await (service = new chrome.ServiceBuilder()
                    .setPort(55555)
                     .build());
        await (options = new chrome.Options());
        await (driver_chrome = chrome.Driver.createSession(options, service));
    }
   
    await (global.driver = driver_chrome);
}

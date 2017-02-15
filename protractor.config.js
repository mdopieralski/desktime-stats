require('ts-node/register');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:3000/',
  specs: [
    'src/**/**.e2e.ts',
  ],
  exclude: [],
  framework: 'jasmine2',
  allScriptsTimeout: 110000,
  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,
  capabilities: {
    'browserName': 'firefox'
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },
  useAllAngular2AppRoots: true
};
'use strict';

import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    const subject = browser.getTitle();
    const result = 'Desktime Stats';
    expect(subject).toEqual(result);
  });

  it('should have header', () => {
    const subject = element(by.css('h1')).isPresent();
    const result = true;
    expect(subject).toEqual(result);
  });

  it('should have <home-component>', () => {
    const subject = element(by.css('desktime-stats-app home-component')).isPresent();
    const result = true;
    expect(subject).toEqual(result);
  });

  it('should have <header d-header>', () => {
    const subject = element(by.css('desktime-stats-app header[d-header]')).isPresent();
    const result = true;
    expect(subject).toEqual(result);
  });

  it('should have <footer d-footer>', () => {
    const subject = element(by.css('desktime-stats-app footer[d-footer]')).isPresent();
    const result = true;
    expect(subject).toEqual(result);
  });
});
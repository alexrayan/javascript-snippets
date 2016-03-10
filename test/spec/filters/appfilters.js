'use strict';

describe('Filter: appFilters', function () {

  // load the filter's module
  beforeEach(module('jsSnippetsApp'));

  // initialize a new instance of the filter before each test
  var appFilters;
  beforeEach(inject(function ($filter) {
    appFilters = $filter('appFilters');
  }));

  it('should return the input prefixed with "appFilters filter:"', function () {
    var text = 'angularjs';
    expect(appFilters(text)).toBe('appFilters filter: ' + text);
  });

});

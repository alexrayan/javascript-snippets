'use strict';

describe('Controller: NestedcatCtrl', function () {

  // load the controller's module
  beforeEach(module('jsSnippetsApp'));

  var NestedcatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NestedcatCtrl = $controller('NestedcatCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NestedcatCtrl.awesomeThings.length).toBe(3);
  });
});

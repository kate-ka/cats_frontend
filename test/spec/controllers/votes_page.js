'use strict';

describe('Controller: VotesPageCtrl', function () {

  // load the controller's module
  beforeEach(module('kishkaApp'));

  var VotesPageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VotesPageCtrl = $controller('VotesPageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VotesPageCtrl.awesomeThings.length).toBe(3);
  });
});

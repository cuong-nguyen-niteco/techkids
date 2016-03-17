'use strict';

angular.module('techkidsApp')
  .directive('appFooter', function () {
    return {
      templateUrl: 'components/app-footer/app-footer.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('app-footer');
      }
    };
  });

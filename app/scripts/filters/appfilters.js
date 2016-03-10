'use strict';

/**
 * @ngdoc filter
 * @name jsSnippetsApp.filter:appFilters
 * @function
 * @description
 * # appFilters
 * Filter in the jsSnippetsApp.
 */
angular.module('jsSnippetsApp')
  	.filter('prettyprint', function () {
		return function (text) {
			return prettyPrintOne(text, '', true);
		};
	})
	.filter('trustAsHtml', ['$sce', function($sce) {
        return $sce.trustAsHtml;
    }]);

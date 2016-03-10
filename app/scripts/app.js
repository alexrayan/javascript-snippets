'use strict';

/**
 * @ngdoc overview
 * @name jsSnippetsApp
 * @description
 * # jsSnippetsApp
 *
 * Main module of the application.
 */
angular
  .module('jsSnippetsApp', [
  	'ui.router',
  	'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
  	$stateProvider
        .state('home', {
            url: '/',
            views: {
                'main': {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                }
            },
            open: true
        })
        .state('nestedCategories', {
            url: '/nested-categories',
            views: {
                'main': {
                    templateUrl: 'views/nested-categories.html',
                    controller: 'NestedcatCtrl'
                }
            },
            open:true
        });
  	$urlRouterProvider.otherwise('/');
  });

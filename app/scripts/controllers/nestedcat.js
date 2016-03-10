'use strict';

/**
 * @ngdoc function
 * @name jsSnippetsApp.controller:NestedcatCtrl
 * @description Parse categories with multiple parents into a tree with child branches.
 * # NestedcatCtrl
 * Controller of the jsSnippetsApp
 */
angular.module('jsSnippetsApp')
  .controller('NestedcatCtrl', ['$scope', '$http', '$filter',function ($scope, $http, $filter) {
    $scope.total = {};

   	var buildTree = function(data,parent){
   		var out = [];
	   	angular.forEach(data, function(v){
	   		var parents = v.parents;
	   		if(parent===null && !parents.length){
	   			parents.push(null);
	   		}
	   		angular.forEach(v.parents, function(p){
	   			if(p===parent){
	   				var children = buildTree(data,v.alias);
	   				if(children){
	   					v.children = children;
	   				}
	   				out.push(v);
				}
	   		});
		}, out);
		return out;
    };
    
    $scope.code = $filter('prettyprint')(buildTree);

    $http.get('data/nested_categories.json').success(function(data) {
		$scope.total = buildTree(data,null);
	});
  }]);

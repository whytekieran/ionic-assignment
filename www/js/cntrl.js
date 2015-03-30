 
 angular.module('calorific.cntrl', []) 

//controller for the home templates list view holding the text and image
//values for each item
    .controller('FoodController', ['$scope', function($scope) {
      $scope.portion = {
        size: '90'
      };
    }]);

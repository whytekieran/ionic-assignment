 
 angular.module('calorific.cntrl', []) 

//controller for the home templates list view holding the text and image
//values for each item
 .controller('FoodCtrl', function($scope) {
  $scope.dishes = [
    { title: 'Soup', pic: 'types-of-soup.jpg' },
    { title: 'Prawn Cocktail', pic: 'Cocktail_1_bg_060702.jpg' },
    { title: 'Spring Roll', pic: 'springroll-china_0.jpg' }
  ];
});



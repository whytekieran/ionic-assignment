
 angular.module('calorific', ['ionic'])

 .run(function($ionicPlatform) {
   $ionicPlatform.ready(function() {
     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
     if(window.cordova && window.cordova.plugins.Keyboard) {
       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
     }
     if(window.StatusBar) {
       StatusBar.styleDefault();
     }
   });
 })

    .config(function($stateProvider, $urlRouterProvider) {
     $stateProvider

     .state('tabs', {
    url: "/tabs",
    abstract: true,
    templateUrl: "tabs.html"
  })

 .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "home.html"
    }
      }
    })

    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "about.html"
     }
      }
     })


      .state('soup', {
      url: "/soup",
      views: {
        'soup': {
          templateUrl: "soup.html"
    }
      }
    });




  $urlRouterProvider.otherwise('/tabs/home');
});

  

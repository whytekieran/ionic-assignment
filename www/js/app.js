
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

//create new function to manipulate the states of the app
 .config(function($stateProvider, $urlRouterProvider) {
     $stateProvider //new stateprovider

 .state('tabs', {  //each of these descibes a different state(template)
    url: "/tabs",  //template url
    abstract: true, //not visible but can display other templates through it
    templateUrl: "tabs.html" //the templates url (important)
  })

//tabs.home home state, contains the listview and will be shown through the 
//tabs.html state
 .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {//view name, nav of the ion-nav-view tage to show template
                     //though
          templateUrl: "home.html"
    }
     }
    })

//tabs.about contains the about.html state and is shown through the tabs.html 
//state
 .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "about.html"
     }
      }
     })

//soup.html state
 .state('soup', {
      url: "/soup",
          templateUrl: "soup.html"
    })

//prawn.html state
 .state('prawn', {
      url: "/prawn",
          templateUrl: "prawn.html"
    })

//roll.html state            each of these states holds a templates path  
 .state('roll', {
      url: "/roll",
          templateUrl: "roll.html"
    })

//lasange state
 .state('lasange', {
      url: "/lasange",
          templateUrl: "lasange.html"
    })

//curry state
 .state('curry', {
      url: "/curry",
          templateUrl: "curry.html"
    })
 
//kebab state
 .state('kebab', {
      url: "/kebab",
          templateUrl: "kebab.html"
    })
                                     //templateUrl very important, specifies
                                     //the template your using
//burger and chips state
  .state('burgerandchip', {
      url: "/burgerandchip",
          templateUrl: "burgerandchip.html"
    })

//doughnut state
 .state('doughnut', {
      url: "/doughnut",
          templateUrl: "doughnut.html"
    })

//pie state
 .state('pie', {
      url: "/pie",
          templateUrl: "pie.html"
    })

//cheesecake state
 .state('cheesecake', {
      url: "/cheesecake",
          templateUrl: "cheesecake.html"
    })

//icecream state
 .state('icecream', {
      url: "/icecream",
          templateUrl: "icecream.html"
    })

//chocolate state
 .state('chocolate', {
      url: "/chocolate",
          templateUrl: "chocolate.html"
    })

//crisps state
  .state('crisps', {
      url: "/crisps",
          templateUrl: "crisps.html"
    });

//if none of the states above can be matched this state is run, this is the
// default state we want to load when starting the app.
 $urlRouterProvider.otherwise('/tabs/home');
});

  

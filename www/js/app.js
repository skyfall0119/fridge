// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.APIservices', 'SpoonacularAPILib'])


.run(function($ionicPlatform, $rootScope, DB, dummyDBManager, $ionicLoading ) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if( "cordova" in window && "plugins" in window.cordova && "Keyboard" in window.cordova.plugins ) {
    	if (window.cordova && window.cordova.plugins.Keyboard) {
      		cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      		cordova.plugins.Keyboard.disableScroll(true);
    	}

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

	DB.init();

  //Initialize Fridge with Database
  $rootScope.listInFridge = [];
  $rootScope.listOfFavorite = {};
  dummyDBManager.init( DB, $rootScope.listInFridge, $rootScope.listOfFavorite);
  dummyDBManager.extract();

  //Show loading screen for DB wait
//   $ionicLoading.show({template: '<p class="item-icon-left">Initializing Database<ion-spinner icon="lines"/></p>'});
//   setTimeout(function() {
//     // console.log($rootScope.listInFridge);
//     // console.log($rootScope.listOfFavorite);
//     dummyDBManager.update();
//     $ionicLoading.hide();
//   }, 1500);
 });
/*
  $ionicPlatform.on( "pause", function() {
      // updates DB with the 2 lists
      dummyDBManager.update();
  } );
  */
})
/*
.config( function( $compileProvider ) {
  $compileProvider.imgSrcSanitizationWhitelist('*.jpg');
})
*/
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
   .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'menuCtrl'
    })

  .state('app.homepage', {
      url: '/homepage',
      views: {
        'menuContent': {
          templateUrl: 'templates/homepage.html'
        }
      }
    })

  .state('app.fridge', {
    url: '/fridge',
    views: {
      'menuContent': {
         templateUrl: 'templates/fridge.html',
         controller: 'fridgeCtrl'
       }
    }
  })

  .state('app.recipe', {
    url: '/recipe',
    views: {
      'menuContent': {
        templateUrl: 'templates/recipe.html',
        controller: 'recipeCtrl'
      }
    }
  })

  .state('app.result', {
    url: '/result',
    /*
    params: {
      resultList: null
    },
    */
    views: {
      'menuContent': {
        templateUrl: 'templates/result.html',
        controller: 'resultCtrl'
      }
    }
  })

  .state('app.selectedRecipe', {
    url: '/selectedRecipe',
    views: {
      'menuContent': {
        templateUrl: 'templates/selectedRecipe.html',
        controller: 'selectedRecipeCtrl'
      }
    }
  })


  .state('app.favorite', {
    url: '/favorite',
    views: {
      'menuContent': {
        templateUrl: 'templates/favorite.html',
        controller: 'favoriteCtrl'
      }
    }
  })

  .state('app.modal', {
    url: '/modal',
    views: {
      'menuContent': {
        templateUrl: 'templates/modal.html',
        controller: 'modalCtrl'
      }
    }
  })


  .state('app.favoriteRecipe', {
    url: '/favoriteRecipe',
    params: {itemId:-1},
    views: {
      'menuContent': {
        templateUrl: 'templates/favoriteRecipe.html',
        controller: 'favoriteRecipeCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/homepage');
});

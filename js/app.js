// Ionic Emtelco App, v0.0.1

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'emtelco' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'emtelco.services' is found in services.js
// 'emtelco.controllers' is found in controllers.js
angular.module('emtelco', ['ionic', 'emtelco.services', 'emtelco.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the new tab has its own child nav-view and history
    .state('tab.new-index', {
      url: '/news',
      views: {
        'news-tab': {
          templateUrl: 'templates/new-index.html',
        }
      }
    })

    .state('tab.new-detail', {
      url: '/new/:newId',
      views: {
        'news-tab': {
          templateUrl: 'templates/new-detail.html',
          controller: 'NewDetailCtrl'
        }
      }
    })

    .state('tab.certificado', {
      url: '/certificado',
      views: {
        'certificado-tab': {
          templateUrl: 'templates/certificado.html'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    })
	
	
	.state('tab.logon', {
      url: '/logon',
      views: {
        'logon-tab': {
          templateUrl: 'templates/logon.html'
        }
      }
    })
	
	.state('tab.pagos', {
      url: '/pagos',
      views: {
        'certificado-tab': {
          templateUrl: 'templates/pagos.html'
        }
      }
    })
	
	.state('tab.laboral', {
      url: '/laboral',
      views: {
        'certificado-tab': {
          templateUrl: 'templates/laboral.html'
        }
      }
    })
	
	.state('tab.ingresos', {
      url: '/ingresos',
      views: {
        'certificado-tab': {
          templateUrl: 'templates/ingresos.html'
        }
      }
    })
	
	;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/logon');

});


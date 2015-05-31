angular.module('sampleApp', [
		'ngRoute', 
    'ngCookies',
		'MainCtrl', 
		'CommentCtrl',
    'UserDetailCtrl',
    'questionsServices',
    'usersServices'
  ])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/ss', {
      templateUrl: 'views/home.html',
      controller: 'CommentController'
    })

    .when('/', {
      templateUrl: 'views/home3.html',
      controller: 'MainController'
    })

    .when('/s', {
      templateUrl: 'views/user-detail.html',
      controller: 'UserDetailController'
    });


  $locationProvider.html5Mode(true);

  }]);
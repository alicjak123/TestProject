angular.module('sampleApp', [
		'ngRoute', 
		'MainCtrl', 
    'questionsServices',
    'usersServices',
    'commentsServices',
    'userDirectives',
    'votesFilter',
    'ngResource'
  ])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/questions/:questionId', {
      templateUrl: 'views/question.html',
      controller: 'MainController'
    })

    .when('/questions', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    .otherwise({
      redirectTo: '/questions'
    });


  $locationProvider.html5Mode(true);

  }]);
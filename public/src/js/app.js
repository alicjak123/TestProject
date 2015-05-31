angular.module('sampleApp', [
		'ngRoute', 
    'ngCookies',
		'MainCtrl', 
		'QuestionCtrl',
    'UserDetailCtrl',
    'questionsServices',
    'usersServices'
  ])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/questions/:questionId', {
      templateUrl: 'views/question.html',
      controller: 'QuestionController'
    })

    .when('/questions', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    .when('/:userId', {
      templateUrl: 'views/user-detail.html',
      controller: 'UserDetailController'
    });


  $locationProvider.html5Mode(true);

  }]);
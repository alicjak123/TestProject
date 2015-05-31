angular.module('sampleApp', [
		'ngRoute', 
		'MainCtrl', 
		'QuestionCtrl',
    'UserDetailCtrl',
    'questionsServices',
    'usersServices',
    'commentsServices',
    'ngResource'
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
    })
    .otherwise({
      redirectTo: '/questions'
    });


  //$locationProvider.html5Mode(true);

  }]);
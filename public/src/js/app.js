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

    .when('/:questionId', {
      templateUrl: 'views/question.html',
      controller: 'CommentController'
    })

    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    .when('/:userId', {
      templateUrl: 'views/user-detail.html',
      controller: 'UserDetailController'
    });


  $locationProvider.html5Mode(true);

  }]);
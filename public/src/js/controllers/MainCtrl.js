angular.module('MainCtrl', [])

.controller('MainController', ['$scope', 'Questions', 'Users', function($scope, Questions, Users) {

		$scope.questions = Questions.query();
    $scope.users  = Users.query();

}]);
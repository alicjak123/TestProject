angular.module('QuestionCtrl', [])

.controller('QuestionController', ['$scope', '$routeParams', 'Questions', 'Users', 'Comments', 

	function($scope, $routeParams, Questions, Users, Comments) {

		var entries = Questions.query(function() {
			$scope.question = entries[$routeParams.questionId];
			$scope.answeredUser = $scope.question.comments.filter(function(value){ return value.answered === true; }).length;
		});
		$scope.users  = Users.query();
		$scope.comments = Comments.query();

}]);
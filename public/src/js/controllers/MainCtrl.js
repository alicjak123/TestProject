angular.module('MainCtrl', [])

.controller('MainController', ['$scope','$routeParams', 'Questions', 'Users', 'Comments', 

	function($scope, $routeParams, Questions, Users, Comments) {

		$scope.showDialog = false;
		$scope.questions = Questions.query();
    $scope.users  = Users.query();
    $scope.comments = Comments.query();

		var entries = Questions.query(function() {
			$scope.question = entries[$routeParams.questionId];
			$scope.answeredUser = $scope.question.comments.filter(function(value){ return value.answered === true; }).length;
		});

		$scope.show = function(userId) {
			var entries = Users.query(function() {
				$scope.user = entries[userId];
			});
			$('<div class="modal-backdrop"></div>').appendTo(document.body).hide().fadeIn();
			$scope.showDialog = true; 
			$( ".section-modal" ).addClass("fadeIn");
		};

		

		$scope.close = function() {

		var $modalDialog = $( ".modal-backdrop" );
		$scope.showDialog = false;

		$modalDialog.fadeOut( "slow", function() {
			$modalDialog.remove(); 
		});

		};

}]);
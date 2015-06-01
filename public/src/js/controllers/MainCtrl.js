angular.module('MainCtrl', [])

.controller('MainController', ['$scope','$routeParams', 'Questions', 'Users', 'Comments', 

	function($scope, $routeParams, Questions, Users, Comments) {

		$scope.showDialog = false;
		$scope.questionLimit = 4;
		$scope.questions = Questions.query();
    $scope.users  = Users.query();
    $scope.comments = Comments.query();
    $scope.sortType     = 'questionId';

		$scope.selectedIndex = 0;
		$scope.itemClicked = function ($index) {
			$scope.selectedIndex = $index;
		};

		$scope.loadQuestions = function() {
			$scope.questionLimit +=1;
		};

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
angular.module('MainCtrl', [])

.controller('MainController', ['$scope', 'Questions', 'Users', function($scope, Questions, Users) {

   Questions.get().success(function(data) {
        $scope.questions  = data;
    });

    Users.get().success(function(data) {
        $scope.users  = data;
    });


}]);
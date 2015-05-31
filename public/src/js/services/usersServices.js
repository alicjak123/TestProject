angular.module('usersServices', [])

  .factory('Users', function($http) {
      return {
          get : function() {
              return $http.get('src/data/users.json');
          }
      };
  });
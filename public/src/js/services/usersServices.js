angular.module('usersServices', [])


  .factory('Users', ['$resource', function($resource) {

		return $resource('src/data/users.json', {}, {

      query: { method:'GET', isArray:true }

    });

  }]);

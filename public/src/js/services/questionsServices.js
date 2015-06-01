
angular.module('questionsServices', ['ngResource'])

  .factory('Questions', ['$resource', function($resource) {

		return $resource('src/data/questions.json', {}, {

      query: { method:'GET', isArray:true },
      update: { method:'PUT', isArray: true }

    });

  }]);

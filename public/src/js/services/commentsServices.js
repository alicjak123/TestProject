angular.module('commentsServices', [])


  .factory('Comments', ['$resource', function($resource) {

		return $resource('src/data/comments.json', {}, {

      query: { method:'GET', isArray:true }

    });

  }]);

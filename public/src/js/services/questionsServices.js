
angular.module('questionsServices', [])

  .factory('Questions', function($http) {
      return {
          get : function() {
              return $http.get('src/data/questions.json');
          }
      };
  });

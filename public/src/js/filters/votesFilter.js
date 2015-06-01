angular.module('votesFilter', [])


  .filter('votesFilter', function() {

		return function(numberOfVotes) {

      return numberOfVotes < 0 ? Math.abs(numberOfVotes) + " downvotes" : numberOfVotes + " upvotes";

    };

  });
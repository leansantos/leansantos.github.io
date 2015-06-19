app.controller('MoviesController', ['$scope', '$http', function($scope, $http){
	$http.get("js/data/movies.json")
		.success(function(response){
			$scope.movies = response.movies;
		});
}])
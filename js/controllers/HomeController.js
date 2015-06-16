app.controller('HomeController', ['$scope', '$http', function($scope, $http){
	$http.get("./js/data/movies.json")
		.success(function(response){
			$scope.movies = response.movies;
		});

	$http.get("./js/data/series.json")
		.success(function(response){
			$scope.tvseries = response.series;
		});

	

}]);

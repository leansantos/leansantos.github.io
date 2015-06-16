app.controller('MovieController', ['$scope', '$http', '$routeParams', '$sce', function($scope, $http, $routeParams){
	$http.get("./js/data/movies.json")
		.success(function(response){
			$scope.movies = response.movies;
			$scope.changeUrl = $scope.movies;

			$scope.titleParam = $routeParams.title;
			$scope.categoryParam = $routeParams.category;


		});
	
}]);




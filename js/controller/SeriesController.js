app.controller('SeriesController', ['$scope', '$http', function($scope, $http){
	$http.get("js/data/series.json")
		.success(function(response){
			$scope.tvseries = response.series;
		});
}])
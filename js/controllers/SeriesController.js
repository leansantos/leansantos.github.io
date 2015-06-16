
app.controller('SeriesController', ['$scope', '$http', '$routeParams', '$sce', function($scope, $http, $routeParams, $sce){
	$http.get("./js/data/series.json")
		.success(function(response){
			$scope.tvseries = response.series;
			$scope.changeUrl = $scope.tvseries;

			$scope.titleParam = $routeParams.title;
			$scope.categoryParam = $routeParams.category;

			$scope.src = function(id){
				return $sce.trustAsResourceUrl($scope.tvseries[id].link);
			};
			
		
		});
}]);


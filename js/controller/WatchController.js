app.controller('WatchController', ['$scope', '$http', '$routeParams', '$sce', function($scope, $http, $routeParams, $sce){
	$http.get('js/data/movies.json')
		.success(function(response){
			$scope.movies = response.movies;
			
			
			$scope.movieLink = function(id){
				return $sce.trustAsResourceUrl($scope.movies[id].link);
			};
		
		});
	$http.get('js/data/series.json')
		.success(function(response){
			$scope.tvseries = response.series;


			$scope.seriesLink = function(id){
				return $sce.trustAsResourceUrl($scope.tvseries[id].link);
			};
		});

			$scope.getparamTitle = $routeParams.title;
			$scope.getparamId = $routeParams.id;
			$scope.getCategory = $routeParams.category;
	
	

}]);

app.directive('movieplayer', function(){
		
	return {
		restrict: 'A',
		template: "<video controls src='{{movieLink(getparamId)}}'></video>"
	};
});

app.directive('seriesplayer', function(){

	return{
		restrict: 'A',
		template: "<video controls autoplay height='256' src='{{seriesLink(getparamId)}}' type='video/mp4' poster='{{tvseries[getparamId].images}}'></video>"
	}

});
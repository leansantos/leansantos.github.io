var app =  angular.module('mymovieapp', ['ngRoute']);


app.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl:'partials/home.html',
			controller:'HomeController'
		})
		.when('/movies', {
			templateUrl:'partials/movies.html'
		})
		.when('/tv-series', {
			templateUrl:'partials/tv-series.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});


app.controller('HomeController', function($scope){
	$scope.movies = [
		'Arrow',
		'The Flash',
		'Breaking Bad'
	];
});
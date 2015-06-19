var app = angular.module('mymovieApp', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		})
		.when('/movies', {
			templateUrl: 'partials/movies.html',
			controller: 'MoviesController'
		})
		.when('/movies/watch-:title', {
			templateUrl: 'partials/watch.html'
		})


		.when('/tv-series', {
			templateUrl: 'partials/series.html',
			controller: 'SeriesController'
		})
		.when('/tv-series/watch-:title', {
			templateUrl: 'partials/watch.html'
		})
		.when('/anime', {
			templateUrl: 'partials/anime.html'
		})
		

		.when('/getName/:fname', {
			templateUrl: 'partials/anime.html'
		})
		.otherwise({
			template: "<h1>Page not found</h1>"
		})
}]);

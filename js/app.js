var app =  angular.module('mymovieapp', ['ngRoute']);


app.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl:'partials/home.html'
		})
		.when('/movies', {
			templateUrl:'partials/movies.html',
			controller:'HomeController'
		})
		.when('/tv-series', {
			templateUrl:'partials/tv-series.html',
			controller:'HomeController'
		})
		.when('/anime', {
			templateUrl:'partials/anime.html',
			controller:'AnimeController'
		})
		.otherwise({
			redirectTo: '/'
		});
});


app.controller('HomeController', function($scope){
	$scope.movies = [
		{"id": 1, "title": "The Amazing Spider-Man", "category": "Movie", "genre": "Action", "year": 2012, "image": "http://25.media.tumblr.com/tumblr_mc4pslDcOh1rjqzqco1_250.jpg",
		"description": "Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. Peter is also finding his way with his first high school crush, Gwen Stacy, and together, they struggle with love, commitment, and secrets. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents’ disappearance - leading him directly to Oscorp and the lab of Dr Curt Connors, his father’s former partner. As Spider-Man is set on a collision course with Connors’ alter-ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero."
		},

		{"id": 2, "title": "The Avengers", "category": "Movie", "genre": "Action", "year": 2012, "image": "http://img.megashare.info/film/1345444626_movie.jpg",
		"description": "Nick Fury is director of S.H.I.E.L.D, an international peace keeping agency. The agency is a who’s who of Marvel Super Heroes, with Iron Man, The Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When global security is threatened by Loki and his cohorts, Nick Fury and his team will need all their powers to save the world from disaster."
		},

		{"id": 3, "title": "Pitch Perfect 2", "category": "Movie", "genre": "Comedy/Music", "year": 2015, "image": "https://lh3.googleusercontent.com/HTO4FpZxyzKI5wpKz-4w6sw-xF2rKxyobhEGU2Efcg=w120-h160-no",
		"description": "After a humiliating command performance at Lincoln Center, the Barden Bellas enter an international competition that no American group has ever won in order to regain their status and right to perform."
		},

		{"id": 4, "title": "Parallel", "category": "Movie", "genre": "Action/Sci-Fi", "year": 2015, "image": "https://lh3.googleusercontent.com/aeXNqor4PhZ6JGSfTayMH-ZoxcSBWCEln9wfs59yrw=w120-h160-no",
		"description": "A mysterious building is the gateway to infinite parallel Earths."
		},

		{"id": 5, "title": "Furious Seven", "category": "Movie", "genre": "Action/Crime/Thriller", "year": 2015, "image": "https://lh3.googleusercontent.com/H_QwNwNjBAFfe8LfAru4Bsha79YubhhhUcjIFOOwsw=w120-h160-no",
		"description": "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother."
		},

		{"id": 6, "title": "The Flashs01-e01", "category": "Tv Series", "genre": "Action/Crime/Thriller", "year": 2015, "image": "https://lh3.googleusercontent.com/brATmfBua6vTkO8HX3eE0YCrm0yzURPSs2NDPs0MHA=w120-h160-no",
		"description": "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother."
		},
	];
});
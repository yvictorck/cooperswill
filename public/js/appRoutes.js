angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerdss', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})
		.when('/projects', {
			templateUrl: 'views/projects.html',
			controller: 'ProjectsController'
		})

		.when('/geekss', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'	
		});

	$locationProvider.html5Mode(true);

}]);
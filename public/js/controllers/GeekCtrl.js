angular.module('GeekCtrl', []).controller('GeekController', function($scope, $http, Geek) {

	$scope.tagline = 'The square root of life is pi!';	
$scope.emailus = function() {


			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			// people can't just hold enter to keep adding the same to-do anymore

				var maildata = {"name":$scope.name,"email":$scope.email,"subject":$scope.subject,"message":$scope.message};

$scope.tagline = maildata.name;

				// // call the create function from our service (returns a promise object)
				Geek.postEmail(maildata)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
					 // $scope.tagline = data.sent;

					});

		};
});
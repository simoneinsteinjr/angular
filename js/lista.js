

angular.module('contactos', [])
  .controller('contactosController', function($scope, $http, $location) {
    
    $scope.listaContactos = function(){
		var url = "/contactos";
		
		$http.get(url).then((response) => {
			$scope.listaContactos = response;
		}, (response) => {
			$scope.getErrMsg = "Error Status: " +  response.statusText;
		});
	}
  });
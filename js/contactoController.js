

angular.module('contactos', [])
.controller('contactosController', function($scope, $http, $location) {
  
  var url = "/contactos";
              
  var getContactos = function(){
      $http.get(url).then((response) => {
      $scope.listaContactos = response.data;
  }, (response) => {
      $scope.getErrMsg = "Error Status: " +  response;
  });
}

  $scope.adicionarContacto = function(){
        $http.post("/adicionarContacto", {"nome":$scope.nomeContacto, "telefone":$scope.telefoneContacto, "email":$scope.emailContacto, "operadora":$scope.operadoraContacto}).then(function(data, status) {
        $scope.nomeContacto = "";
        $scope.telefoneContacto = "";
        $scope.emailContacto = "";
        $scope.operadoraContacto = "";
        getContactos();
      })
  }
  
  $scope.deleteContacto = function(){
    $http.delete("/deleteContacto", {"contacto_id":$scope.contacto.id}).then(function(data, status) {
          getContactos();
      })
  }

  getContactos();

});


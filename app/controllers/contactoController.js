

var myApp = angular.module('contactos', []);

myApp.controller('contactosController',['$scope', '$http', 'crudAPIService',  function ($scope, $http, crudAPIService) {
  
  $scope.message = "Lista de Contactos";
  $scope.selecionado = "selecionado";
  $scope.negrito = "negrito";  

  $scope.operadoras = ["Vodacom", "Mcel", "Movitel"];

  var url = "/contactos";

  var getContactos = function () {
    crudAPIService.getContactos().then((response) => {
      $scope.listaContactos = response.data;
    }, (response) => {
      $scope.getErrMsg = "Error Status: " + response;
    });
  }

  $scope.adicionarContacto = function () {
    crudAPIService.adicionarContacto($scope.nomeContacto, $scope.telefoneContacto, $scope.emailContacto, $scope.operadoraContacto)
      $scope.nomeContacto = "";
      $scope.telefoneContacto = "";
      $scope.emailContacto = "";
      $scope.operadoraContacto = "";
      $scope.contactoForm.$setPristine(); 
      getContactos();
  }

  $scope.removeItem = function (contacto) {
    crudAPIService.removeItem(contacto)
      getContactos();
  }

  getContactos();

}]);

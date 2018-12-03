

var myApp = angular.module('contactos', []);

myApp.controller('contactosController',['$scope', '$http', 'crudAPIService',  function ($scope, $http, crudAPIService) {
  
  // label/title of app
  $scope.message = "Lista de Contactos";

  // CSS proprietes of checkbox selected/deselected
  $scope.selecionado = "selecionado";
  $scope.negrito = "negrito";  

  // Operatores array
  $scope.operadoras = ["Vodacom", "Mcel", "Movitel"];

  var url = "/contactos";

  // get All contacts
  var getContactos = function () {
    crudAPIService.getContactos().then((response) => {
      $scope.listaContactos = response.data;
    }, (response) => {
      $scope.getErrMsg = "Error Status: " + response;
    });
  }

  // Add contact
  $scope.adicionarContacto = function () {
    crudAPIService.adicionarContacto($scope.nomeContacto, $scope.telefoneContacto, $scope.emailContacto, $scope.operadoraContacto)
      $scope.nomeContacto = "";
      $scope.telefoneContacto = "";
      $scope.emailContacto = "";
      $scope.operadoraContacto = "";
      $scope.contactoForm.$setPristine(); 
      getContactos();
  }

  // Remove contact
  $scope.removeItem = function (contacto) {
    crudAPIService.removeItem(contacto)
      getContactos();
  }

  getContactos();

}]);



var myApp = angular.module('contactos', []);

myApp.controller('contactosController',['$scope', '$http', 'crudAPIService',  function ($scope, $http, crudAPIService) {
  
  $scope.message = "Lista de Contactos";
  $scope.selecionado = "selecionado";
  $scope.negrito = "negrito";  

//   $scope.isContactoSelecionado = function (contactos) {
//     return contactos.some(function (contacto) {
//         return contacto.selecionado;
//     });
// }

  var url = "/contactos";

  var getContactos = function () {
    crudAPIService.getContactos().then((response) => {
      $scope.listaContactos = response.data;
    }, (response) => {
      $scope.getErrMsg = "Error Status: " + response;
    });
  }

  $scope.adicionarContacto = function () {
    crudAPIService.adicionarContacto($scope.nomeContacto, $scope.telefoneContacto, $scope.emailContacto)
      $scope.nomeContacto = "";
      $scope.telefoneContacto = "";
      $scope.emailContacto = "";
      getContactos();
  }

  $scope.removeItem = function (contacto) {
    crudAPIService.removeItem(contacto)
      getContactos();
  }

  getContactos();

}]);

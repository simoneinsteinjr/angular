var myApp = angular.module('contactos');

myApp.directive("listaContactosView", function () {
    return {
      restrict: 'AECM',
      templateUrl: '/app/directives/listaContactos.html',
      replace: true,
      controller: 'contactosController',
      scope: {
        listaContactos: "=",
        errorMessage: "@"
      },
  
    }
  });
  
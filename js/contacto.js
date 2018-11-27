angular.module('contactos', [])
  .controller('contactosController', function($http, $scope) {
    
     $http.get('/getListaContactos').then(function(data) {
      $scope.listaContactos = data;
  });

 
  $scope.listaContactos.adicionarContacto = function() {
    $scope.listaContactos.contactos.push({text:listaContactos.contactoText, done:false});
    $scope.listaContactos.contactoText = '';
    };
 
    $scope.listaContactos.remaining = function() {
      var count = 0;
      angular.forEach($scope.listaContactos.contactos, function(contacto) {
        count += contacto.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.listaContactos.archive = function() {
      var oldContactos = $scope.listaContactos.contactos;
      $scope.listaContactos.contactos = [];
      angular.forEach($scope.oldContactos, function(contacto) {
        if (!contacto.done) $scope.listaContactos.contactos.push(contacto);
      });
    };
  }); 
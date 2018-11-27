

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
        $http.post("/adicionarContacto", {"nome":$scope.nomeContacto, "telefone": $scope.telefoneContacto, "email": $scope.emailContacto}).then(function(data, status) {
        $scope.nomeContacto = "";
        $scope.telefoneContacto = "";
        $scope.emailContacto = "";
          getContactos();
      })
  }

//   $scope.completeTodo = function(todo){

//     $http.put("/updateTodo", {"todo_id":todo.id, "todo_complete":todo.complete}).then(function(data, status) {
//           getTodos();
//       })
//   }

  $scope.deleteContacto = function(){
    $http.delete("/deleteContacto", {"contacto_id":$scope.contacto.id}).then(function(data, status) {
          getContactos();
      })
  }

  getContactos();


});


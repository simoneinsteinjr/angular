
angular.module('contactos')
    .service('crudAPIService', function ($http) {

        this.getContactos = function () {
            return $http.get("/contactos");
        }

        this.adicionarContacto = function (nomeContacto, telefoneContacto, emailContacto) {
            $http.post("/adicionarContacto", { "nome": nomeContacto, "telefone": telefoneContacto, "email": emailContacto})
        }


        this.removeItem = function (contacto) {
            $http.delete("/deleteContacto/" + contacto.id)
        }

        this.randomCalulation = function (input) {
            if(!input)
                throw 'Null input value';

            return input + 5;
        }

    });



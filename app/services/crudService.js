
angular.module('contactos')
    .service('crudAPIService', function ($http) {

        // get contacts
        this.getContactos = function () {
            return $http.get("/contactos");
        }

        // add contact
        this.adicionarContacto = function (nomeContacto, telefoneContacto, emailContacto, operadoraContacto) {
            $http.post("/adicionarContacto", { "nome": nomeContacto, "telefone": telefoneContacto, "email": emailContacto, "operadora": operadoraContacto})
        }

        // remove contact
        this.removeItem = function (contacto) {
            $http.delete("/deleteContacto/" + contacto.id)
        }

    });



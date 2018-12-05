angular.module('contactos')

//1.
describe('Contacto CRUD service test', function () {
    var crudAPIService, httpBackend;
    var exampleContactos = {nome: 'nome1', nome: 'nome2'};

    beforeEach(function () {
        //3. load the module.
        module('contactos');
        // 4. get your service, also get $httpBackend
        // $httpBackend will be a mock.
        inject(function (_$httpBackend_, _crudAPIService_) {
            crudAPIService = _crudAPIService_;
            httpBackend = _$httpBackend_;
        });

        // Return a mock response
        httpBackend.when('GET', '/contactos')
            .respond(exampleContactos);

    });

    // 5. make sure no expectations were missed in your tests.
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('Should have success set to true after GetContactos API method calling', function () {

        var returnData = {};
        //7. expectGET to make sure this is called once.
        httpBackend.expectGET('/contactos').respond(200);

        crudAPIService.getContactos();

        httpBackend.flush();
    });


    it('Should have success set to true after AdicionarContacto API method calling', function () {

        var returnData = { "nome": "ana", "telefone": "84123", "email": "ana@gmail.com", "operadora": "Vodacom" }; 
        //7. expectGET to make sure this is called once.
        httpBackend.expectPOST('/adicionarContacto', returnData).respond(200);

        crudAPIService.adicionarContacto("ana", "84123", "ana@gmail.com", "Vodacom");

        httpBackend.flush();
    });


    it('getContactos should have successfully get all contactos from backend server', function () {
        httpBackend.expectGET('/contactos');
        
        // Given (not really anything for us to use as a given in this case)
        
        // When
        var sut = crudAPIService.getContactos().then((result) => {
            // Then
            expect(result.data).toEqual(exampleContactos);
        });
        
        // clean up and make sure that async methods are closed and tests ends
        httpBackend.flush();
    });
 
});
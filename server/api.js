
const express = require('express');
const routes = require('express').Router();
const connector = require("./connection.js");

const connection = connector.connection;


// Default page
routes.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


// Retrieve all contactos 
routes.get('/contactos', function (req, res) {
  connection.query('SELECT * FROM contactos', function (error, data, fields) {
    if (error) throw error;
    return res.send(JSON.stringify(data));
  });
});


// Add a new contacto  
routes.post('/adicionarContacto', function (req, res) {

  connection.query("INSERT INTO contactos SET ? ", { "nome": req.body.nome, "telefone": req.body.telefone, "email": req.body.email, "operadora": req.body.operadora}, function (error, results, fields) {
    if (error) throw error;
    console.log('Contacto adicionado');
    return res.send({ error: false, data: results, message: 'Contacto Adicionado com sucesso.' });
  });
});

//  Delete contacto
routes.delete('/deleteContacto/:id', function (req, res) {

  let contacto_id = req.params.id;

  connection.query('DELETE FROM contactos WHERE id = ?', [contacto_id], function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'Contacto removido com sucesso.' });
  });
});

module.exports = routes;
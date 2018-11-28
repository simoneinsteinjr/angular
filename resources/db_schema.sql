CREATE DATABASE contactosdb;

CREATE TABLE contactos (
  id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(50),
  telefone int(11),
  email varchar(50),
  operadora varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO contactos (id, nome, telefone, email, operadora) VALUES
(1, 'Ana Maria', 84123, "ana@gmail.com", "Vodacom"),
(2, 'Jose Luis', 82123, "jose@gmail.com", "Mcel"),
(3, 'Joao Paulo', 86123, "joao@gmail.com", "Movitel");
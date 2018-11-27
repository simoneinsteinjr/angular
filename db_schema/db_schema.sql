CREATE TABLE contactos (
  id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(50),
  telefone int(11),
  email varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO contactos (id, nome, telefone, email) VALUES
(1, 'Ana', 84123, "ana@gmail.com"),
(2, 'Jose', 82123, "jose@gmail.com"),
(3, 'Joao', 86123, "joao@gmail.com");
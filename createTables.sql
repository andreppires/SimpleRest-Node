CREATE DATABASE dbase;
USE dbase;

create table user
   (username 	varchar(255)	not null unique,
    password 	varchar(255)	not null,
    pontos int not null DEFAULT 0,
    primary key(username));

-- Inserir elementos nas tabelas


INSERT INTO user (username, password) VALUES
('admin', 'adminadmin'),
('develop', 'test');

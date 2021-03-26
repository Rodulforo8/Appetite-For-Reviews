# README

Este archivo README contiene todos los datos tanto de versiones de la tecnologia usada como los comandos para instalar las dependencias y correr la aplicacion.

Things you may want to cover:

## VERSIONES

* Ruby version : 2.7.2
* Rails version :  6.1.3
* React version : react@17.0.2
* Postgresql version : 12.2-1


# CLONAR Y ACCEDER A LAS CARPETAS DE LA APLICACION

*git clone https://github.com/Rodulforo8/Appetite-for-reviews.git

*cd .\Appetite-for-reviews\

# INSTALAR DEPENDENCIAS

*npm install

*bundle install

# BASE DE DATOS

Creacion de la base de datos para la aplicacion

## CREDENCIALES

ir al archivo \config\database.yml y colocar el siguiente driver por defecto de postgresql

default: &default
  adapter: postgresql
  encoding: unicode
  host: 'localhost'
  username: 'postgres'
  password: 'postgres'
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>

en caso de tener otras credenciales de postgresql cambiar las respectivas variables

## CREAR, MIGRAR Y POPULAR BASE DE DATOS

Correr los siguientes comandos en la terminal:

*rails db:create
*rails db:migrate
*rails db:seed

# CORRER LA APLICACION

para inicializar la aplicacion corrrer el siguiente comando en la terminal: 

*rails s

# ACCEDER A LA APLICACION Y A LA DOCUMENTACION

La ruta para acceder a la aplicacion es:

*http://localhost:3000/

La ruta para acceder a la documentacion de la aplicacion es:

*http://localhost:3000/api-docs/index.html#/

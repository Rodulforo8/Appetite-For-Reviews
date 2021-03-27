# README

This README file contains all the info to install dependencies, database and run de application

# VERSIONS

* Ruby version : 2.7.2
* Rails version :  6.1.3
* React version : react@17.0.2
* Postgresql version : 12.2-1


## CLONE REPOSITORY AND ACCESS FILE

* git clone https://github.com/Rodulforo8/Appetite-for-reviews.git

* cd .\Appetite-for-reviews\

## DEPENDENCIES INSTALLATION

* npm install

* bundle install

# DATABASE

Application database creation

## CREDENTIALS

enter the route  \config\database.yml y colocar el siguiente driver por defecto de postgresql  and replace with the following credentials:

default: &default
  adapter: postgresql
  encoding: unicode
  host: 'localhost'
  username: 'postgres'
  password: 'postgres'
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>

Change variables based on your postgres credentials

## CREATE, MIGRATE AND SEED DATABASE

Run this commands on the terminal:

* rails db:create
* rails db:migrate
* rails db:seed

## RUN SERVER

Run the server with the following command on the terminal:

* rails s

## APPLICATION AND DOCUMENTATION ACCESS

Application access route:

* http://localhost:3000/

Swagger application documentation route:

* http://localhost:3000/api-docs/index.html#/

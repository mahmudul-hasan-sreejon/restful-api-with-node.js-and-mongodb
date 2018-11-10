#!/bin/bash

docker-compose down
docker-compose stop
docker rmi -f restful-api-with-nodejs-and-mongodb_api:latest
docker rmi -f restful-api-with-nodejs-and-mongodb_db_seed:latest
clear
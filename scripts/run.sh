#! /bin/bash

docker-compose up -d --force-recreate
cd client && npm i && ng serve --open

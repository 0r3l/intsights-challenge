#! /bin/bash

docker-compose up -d --force-recreate
cd client && ng serve --open

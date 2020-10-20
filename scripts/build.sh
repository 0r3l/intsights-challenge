#! /bin/bash
docker rm intsights-mongo-seed
docker-compose up -d --force-recreate

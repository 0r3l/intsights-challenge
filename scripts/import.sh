#! /bin/bash

mongoimport --host mongodb --db insights --collection alerts --type json --file  /seed/data.json --jsonArray

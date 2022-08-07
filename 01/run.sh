#!/bin/bash

docker exec -it mongo mongo -u test -p pass --authenticationDatabase tsetdb

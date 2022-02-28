#!/bin/bash

for i in {1..9999}; do
  echo -n "START DDos iteration #$i "; date ;
  npm run fullRestart
  sleep 300;
done

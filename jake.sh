#! /bin/bash
[ ! -f ./node_modules/.bin/jake ] && echo "Building dependencies" && npm rebuild

./node_modules/.bin/babel app.es6.js > app.js
./node_modules/.bin/jake $*

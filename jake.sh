#! /bin/bash
[ ! -f ./node_modules/.bin/jake ] && echo "Building dependencies" && npm rebuild

./node_modules/.bin/jake $*

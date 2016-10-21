#!/bin/bash
cat ./js/components/*.coffee | coffee --compile --stdio > ./js/esel.js

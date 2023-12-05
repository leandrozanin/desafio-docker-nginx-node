#!/bin/bash

dockerize -wait tcp://db-mysql:3306 -timeout 240s node index.js
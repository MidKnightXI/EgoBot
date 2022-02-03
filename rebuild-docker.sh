#!/bin/bash
green='\e[0;32m'
red='\e[0;31m'
neutral='\e[0;m'

clear
echo -e "${red}\t\t[Deleting Docker data]\n${neutral}"
yes | docker system prune -a
yes | docker volume prune
clear
echo -e "${green}\t\t[Run docker-compose up --build]\n${neutral}"
docker-compose build
clear
#!/bin/bash
echo "Please select how do you want to run you tests - enter number:
    1 - cypress runner
    2 - headless
    3 - default headless"
read num

if [ $num = 1 ]; then
  echo "Running: cypress runner"
  echo `npx cypress open`
elif [ $num = 2 ]; then
  echo "Choose browser - enter selected number:
  1 - Electron
  2 - Chrome
  3 - Firefox"
  read browsernum
  if [ $browsernum = 1 ]; then
   echo `npx cypress run --browser electron`
  elif [ $browsernum = 2 ]; then
   echo `npx cypress run --browser chrome`
  elif [ $browsernum = 3 ]; then
   echo `npx cypress run --browser firefox`
  fi
else [ $num = 3 ];
  echo "Running: default headless"
  echo `npm run cypress:run`
fi
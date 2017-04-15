#!/bin/sh

cd contract
CONFIG_CONTENTS=`./scripts/prepare_contract.sh`
CONFIG_CONTENTS_ARRAY=($CONFIG_CONTENTS)
cd ..

CONFIG_FILE=src/environments/environment.ts

ADDRESS=${CONFIG_CONTENTS_ARRAY[0]}
sed -i '' 's#_CONTRACT_ADDRESS_#'$ADDRESS'#g' $CONFIG_FILE

ABI=${CONFIG_CONTENTS_ARRAY[1]}
sed -i '' 's#_CONTRACT_ABI_#'$ABI'#g' $CONFIG_FILE

if [ "$1" == "e2e" ]; then
  ng e2e
  docker ps | tail -n 1 | awk '{print $1}' | xargs docker kill
  git checkout $CONFIG_FILE
else
  trap "git checkout $CONFIG_FILE" SIGINT
  ng serve
  docker ps | tail -n 1 | awk '{print $1}' | xargs docker kill | > /dev/null
fi

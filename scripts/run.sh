#!/bin/sh

set -e

cd contract
CONFIG_CONTENTS=`./scripts/prepare_contract.sh`
CONFIG_CONTENTS_ARRAY=($CONFIG_CONTENTS)
cd ..

CONFIG_FILE=src/environments/environment.ts

VERIFICATION_ADDRESS=${CONFIG_CONTENTS_ARRAY[0]}
sed -i '' 's#_CONTRACT_ADDRESS_#'$VERIFICATION_ADDRESS'#g' $CONFIG_FILE

VERIFICATION_ABI=${CONFIG_CONTENTS_ARRAY[1]}
sed -i '' 's#_CONTRACT_ABI_#'$VERIFICATION_ABI'#g' $CONFIG_FILE

TOKEN_ADDRESS=${CONFIG_CONTENTS_ARRAY[2]}
sed -i '' 's#_TOKEN_ADDRESS_#'$TOKEN_ADDRESS'#g' $CONFIG_FILE

TOKEN_ABI=${CONFIG_CONTENTS_ARRAY[3]}
sed -i '' 's#_TOKEN_ABI_#'$TOKEN_ABI'#g' $CONFIG_FILE

if [ "$1" == "e2e" ]; then
  ng e2e
  docker ps | tail -n 1 | awk '{print $1}' | xargs docker kill
  git checkout $CONFIG_FILE
else
  trap "git checkout $CONFIG_FILE" SIGINT
  ng serve
  docker ps | tail -n 1 | awk '{print $1}' | xargs docker kill | > /dev/null
fi

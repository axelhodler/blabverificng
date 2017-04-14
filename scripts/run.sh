#!/bin/sh

cd contract
CONFIG_CONTENTS=`./scripts/prepare_contract.sh`
CONFIG_CONTENTS_ARRAY=($CONFIG_CONTENTS)
cd ..

ADDRESS=${CONFIG_CONTENTS_ARRAY[0]}
sed -i '' 's#_CONTRACT_ADDRESS_#'$ADDRESS'#g' src/app/config.ts

ABI=${CONFIG_CONTENTS_ARRAY[1]}
sed -i '' 's#_CONTRACT_ABI_#'$ABI'#g' src/app/config.ts

if [ "$1" == "e2e" ]; then
  ng e2e
  docker ps | tail -n 1 | awk '{print $1}' | xargs docker kill
  git checkout src/app/config.ts
else
  trap "git checkout src/app/config.ts" SIGINT
  ng serve
  docker ps | tail -n 1 | awk '{print $1}' | xargs docker kill | > /dev/null
fi

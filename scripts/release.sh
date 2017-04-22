#!/bin/sh

set -e

git branch -D gh-pages
git checkout -b gh-pages
npm run build
find . -maxdepth 1 ! -path . -not -name dist -not -name .git -not -name scripts -exec rm -rf {} \;
mv dist/* .
rm -rf dist/
rm -rf scripts/
git add .
git commit -m "release"
git push origin gh-pages --force
git checkout master

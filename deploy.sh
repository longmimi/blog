#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:longmimi/blog.git master:gh-pages

commitTime=`date +%Y-%m-%d/%H:%M:%S`
commitHead='🌈 Upd:'
commitInfo=$*

cd ../../../
git add -A
git commit -m "${commitHead} ${commitInfo} ${commitTime}"
git push origin master

echo Done



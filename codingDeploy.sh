#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn export

# 进入生成的文件夹
cd coding-pages

git init
git add -A
git commit -m 'deploy'

# 发布到 CODING
git push -f git@git.dev.tencent.com:reng/rengarch.git master:coding-pages

cd -
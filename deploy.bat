call npm run build

cd src/.vuepress/dist

call git init

call git add -A
call git commit -m 'deploy'

call git push -f https://github.com/perrykaufman/perrykaufman.github.io.git master

cd ../../..
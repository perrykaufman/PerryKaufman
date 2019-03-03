call npm run build

if %errorlevel% neq 0 echo "project build failed" & exit /b

cd src/.vuepress/dist

call git init

call git add -A
call git commit -m 'deploy'

call git push -f https://github.com/perrykaufman/perrykaufman.github.io.git master

cd ../../..
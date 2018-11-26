cd /src/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:BrotherGilburt/BrotherGilburt.github.io.git master

cd -
# How To Deploy

```
npm run build

cd src/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/BrotherGilburt/brothergilburt.github.io.git master
```

If update does not work:

```
git commit --allow-empty -m "trigger rebuild"
git push https://github.com/BrotherGilburt/brothergilburt.github.io.git master
```
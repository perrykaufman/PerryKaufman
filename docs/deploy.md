# How To Deploy

```
npm run build

cd src/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/perrykaufman/perrykaufman.github.io.git master

cd ../../..
```

If update does not work:

```
git commit --allow-empty -m "trigger rebuild"
git push https://github.com/perrykaufman/perrykaufman.github.io.git master
```
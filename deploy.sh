set -e

cd site

npm run dist

cd dist

git init
git add -A
git commit -m 'deploy to gh-pages'

git push -f https://github.com/hakamaq/Training-JS-Watson-Chatbot master:gh-pages

cd -
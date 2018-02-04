webpack with phpstorm

Set Javascript version to ECMAScript 6
——————————————————————————————————------------------
Settings (Preferences) | Languages & Frameworks | Javascript | Javascript language version

Fixe  “Unresolved function or method” for “require”
——————————————————————————————————------------------

Make sure that Node.js Core library is enabled in :
=> Settings (Preferences) | Languages & Frameworks | Node.js and NPM


Lancer webpack dans le terminal et voir les modification :
——————————————————————————————————-------------------------
=> npm run watch

Vous avez désormais 3 moyens de lancer Webpack :
——————————————————————————————————-------------------------
npm run start : qui démarre votre serveur, le HMR et qui ne minifie aucun fichier
npm run dev : qui lance votre environnement de développement sans HMR ni serveur et minification
npm run prod : qui lance votre environnement de production sans HMR ni serveur et avec minification

Rappel dépôt avec Github :
——————————————————————————————————-------------------------
echo "# taskRunnerWithWebpack" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/anouvene/taskRunnerWithWebpack.git
git push -u origin master

Ou bien :
——————————————————————————————————-------------------------
git remote add origin https://github.com/anouvene/taskRunnerWithWebpack.git
git push -u origin master
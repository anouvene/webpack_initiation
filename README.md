webpack with phpstorm<br>

Set Javascript version to ECMAScript 6<br>
——————————————————————————————————------------------<br>
Settings (Preferences) | Languages & Frameworks | Javascript | Javascript language version<br>

Fixe  “Unresolved function or method” for “require”<br>
——————————————————————————————————------------------<br>

Make sure that Node.js Core library is enabled in :<br>
=> Settings (Preferences) | Languages & Frameworks | Node.js and NPM<br>


Lancer webpack dans le terminal et voir les modification :<br>
——————————————————————————————————-------------------------<br>
=> npm run watch<br>

Vous avez désormais 3 moyens de lancer Webpack :<br>
——————————————————————————————————-------------------------<br>
npm run start : qui démarre votre serveur, le HMR et qui ne minifie aucun fichier<br>
npm run dev : qui lance votre environnement de développement sans HMR ni serveur et minification<br>
npm run prod : qui lance votre environnement de production sans HMR ni serveur et avec minification<br>

Rappel dépôt avec Github :<br>
——————————————————————————————————-------------------------
echo "# taskRunnerWithWebpack" >> README.md<br>
git init<br>
git add README.md<br>
git commit -m "first commit"<br>
git remote add origin https://github.com/anouvene/taskRunnerWithWebpack.git<br>
git push -u origin master<br>

Ou bien :<br>
——————————————————————————————————-------------------------<br>
git remote add origin https://github.com/anouvene/taskRunnerWithWebpack.git<br>
git push -u origin master<br>
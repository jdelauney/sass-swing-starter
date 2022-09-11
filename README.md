----
#
<p align="center" style="font-size:3.2em; font-weight:900;">
sass-swing-starter
</p>

<p align="center" style="font-size:1.4em">
Modèle de démarrage pour le framework SCSS/CSS <a href="https://github.com/jdelauney/sass-swing-starter.git">Sass Swing</a>
</p>

<p align="center"> 
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jdelauney/sass-swing-starter?style=for-the-badge">  
  <a href="https://github.com/jdelauney/sass-swing-starter/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jdelauney/sass-swing-starter.svg?style=for-the-badge">
  </a>
  <a href="https://github.com/jdelauney/sass-swing-starter/graphs/contributors">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/jdelauney/sass-swing-starter.svg?style=for-the-badge">
  </a>
</p>
<p align="center">
  <a href="https://github.com/jdelauney/sass-swing-starter/network/members">
    <img alt="Forks" src="https://img.shields.io/github/forks/jdelauney/sass-swing-starter.svg?style=for-the-badge">
  </a>
  <a href="https://github.com/jdelauney/sass-swing-starter/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/jdelauney/sass-swing-starter.svg?style=for-the-badge">
  </a> 
  <a href="https://github.com/jdelauney/sass-swing-starter/blob/master/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/jdelauney/sass-swing-starter.svg?style=for-the-badge">
  </a>
</p>

#

----

## Vue d'ensemble
Starter kit pour démarrer un nouveau projet front-end avec **Sass Swing**
Ce modèle vous fournit le minimum pour bien commencer.
Il contient le compilateur SASS pour les fichiers SCSS et le bundler ROLLUP

Si vous désirez utiliser un bundler tel que webpack, parcel ou autre, c'est à vous de les mettre en place et de les configurer.

----

<p align="center">
  <a href="https://jdelauney.github.io/sass-swing/"><strong>Explorer le framework Sass Swing</strong></a>
  <br />
  <br />
  <a href="https://github.com/jdelauney/sass-swing-starter/issues">Signaler un Bug</a>
  ·
  <a href="https://github.com/jdelauney/sass-swing-starter/issues">Proposer une Feature</a>
  <br />
</p>
<hr/>

## Présentation


### Structure du projet

La structure du projet se présente ainsi :
```
Mon-site-web/
 |--dist/
 |  |--public
 |     |--assets
 |     |  |--icons
 |     |  |--images
 |     |  |--fonts
 |     |--styles
 |     |--scripts		
 |--src
    |--assets
    |  |--icons
    |  |--images
    |  |--fonts
    |--styles
    |   |--scss     
    |      |-index.scss
    |--scripts
    |  |-script_index.js
    |--index.html

```

De base le fichier `index.html` contient dans le `<head>` toutes les balises **open graph** de base et tous les tags indispensables pour un **bon référencement SEO**.

## Installation
Téléchargez ou clonez les sources
```shell
> git clone https://github.com/jdelauney/sass-swing-starter.git
```
Installez des dépendances
```shell
> npm install
```
<p align="right">(<a href="#top">Aller en haut de la page</a>)</p>

### Utilisation

Pour remplir facilement les tags de la balise `<head>` vous aurez à remplacer les variables suivantes :
- `${title}`
- `${desc}`
- `${brand}`
- `${domain-url}` eg _site.com_
- `${app-name}` eg _le nom de votre produit_
- `${opengraph-thumb}` eg _page-thumb.jpg_

Le reste sera à remplir et/ou modifier selon vos besoins.

### Commandes

```sh
> npm run build:css
```
Cette commande compilera Cette commande compilera vos fichiers SCSS et minifiera le CSS dans le dossier `./dist/public/styles`.

```sh
> npm run build:js
```
Cette commande  __bundlera__ et minifiera vos fichiers javascript dans le dossier `./dist/public/scripts`.

```sh
> npm run build
```
Cette commande compilera vos fichiers SCSS et minifiera le CSS dans le dossier `./dist/public/styles`.
Vos fichiers javascript seront __bundlés__ et minifiés dans le dossier `./dist/public/scripts`.
Enfin vos fichiers HTML et le dossier `./src/assets`.seront copiés dans le dossier `./dist`

<p align="right">(<a href="#top">Aller en haut de la page</a>)</p>

## LICENCE

Sass Swing est distribué sous la licence MIT

Copyright (c) 2021-2022 Jérôme Delauney et autres contributeurs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<p align="right">(<a href="#top">Aller en haut de la page</a>)</p>
<hr>

## CREDITS

👤 **Jérôme Delauney**

* Website: https://jdelauney.github.io
* Github: [@jdelauney](https://github.com/jdelauney)
* LinkedIn: [@Jérôme Delauney](https://www.linkedin.com/in/jérôme-delauney-802994bb/)
* Twitter: [#Jérôme Delauney](https://twitter.com/JeromeDelauney)

<p align="right">(<a href="#top">Aller en haut de la page</a>)</p>
<hr>

## SOUTENEZ NOUS

**Donnez nous une étoile** ⭐️ **si vous trouvez ce projet intéressant ou qu'il vous aide !**

## CONTRIBUEZ

Les contributions sont ce qui fait de la communauté open source un endroit incroyable pour apprendre, inspirer et créer.

**Toutes les contributions que vous faites sont grandement appréciées**.

Si vous avez une suggestion qui améliorerait cela, **veuillez "forker" le dépôt** et créer une "pull request". Vous pouvez également simplement ouvrir une "issue" avec la balise 'amélioration' ou autre.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/TheFeature`)
    * Or switch to existing branch (`git checkout feature/TheFeatureToFix`)
3. Commit your Changes
    * Commit a new feature (`git commit -m 'feat: do something'`)
    * Or commit a fix (`git commit -m 'fix: Correct something'`)
4. Push to the Branch (`git push origin feature/TheFeature`)
5. Open a Pull Request

N'oubliez pas de mettre une étoile ⭐️ au projet !

Merci encore !

<hr/>
<p align="center" style="font-size:3.2em; font-weight:900;">
Développez vous avec ❤️
</p>

<p align="right">(<a href="#top">Aller en haut de la page</a>)</p>

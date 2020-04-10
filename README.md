# Portfolio

<p align="start">
  <a href="https://travis-ci.org/sebastienblanchet/portfolio"><img src="https://travis-ci.org/sebastienblanchet/portfolio.svg?branch=master" alt="Build Status"></a>
  <!-- <a href='https://coveralls.io/github/sebastienblanchet/portfolio?branch=master'><img src='https://coveralls.io/repos/github/sebastienblanchet/portfolio/badge.svg?branch=master' alt='Coverage Status' /></a> -->
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License"></a>
</p>

_Sebastien Blanchet_

Running [live here!](https://sebastienblanchet.github.io/portfolio/)

## Build

To build and run development version

```bash
npm install
npm run serve
```

For prod, using a server of your choice:

```bash
npm run build
serve dist
```

## Deployment

Configuration of  `.travis.yml` will automatically deploy each commit to *master* to GitHub pages.

If you are forking the repository, make sure to visit [Vue's deployment guide](https://cli.vuejs.org/guide/deployment.html#github-pages) (i.e. setting up your Travis-CI `GITHUB_TOKEN`).

## Contents

Key repository files are listed below:

```bash

~/portfolio/
│
├── public/ # static files
├── src/
│   ├── App.vue # single page application layout
│   ├── assets/
│   │   ├── **.json # core JSON content for page render
│   │   └──── img/ # dynamic images
│   ├── components/ # Section level components
│   │   └── ui/ # common UI utilities
│   ├── main.js  # core app bootstrap
│   ├── plugins/ #plugin level overides
│   └── utils/  # common script utils
└── tests/ # mocha UI test definitions

```

## License

[MIT](http://opensource.org/licenses/MIT)

*Copyright (c) 2020-present Sebastien Blanchet*

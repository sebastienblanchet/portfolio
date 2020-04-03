## Portfolio

[![Build Status](https://travis-ci.org/sebastienblanchet/portfolio.svg?branch=master)](https://travis-ci.org/sebastienblanchet/portfolio)

#### Sebastien Blanchet

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
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── App.vue
│   ├── assets/
│   │   ├── dictionaries.json
│   │   ├── img/
│   │   ├── projects.json
│   │   └── resume.json
│   ├── components/
│   │   ├── About.vue
│   │   ├── Education.vue
│   │   ├── Footer.vue
│   │   ├── Info.vue
│   │   ├── Interests.vue
│   │   ├── Navbar.vue
│   │   ├── Projects.vue
│   │   ├── Section.vue
│   │   ├── Skills.vue
│   │   ├── Timeline.vue
│   │   └── ui/
│   │       ├── Dialog.vue
│   │       ├── IconItem.vue
│   │       ├── Rating.vue
│   │       ├── SidebarItem.vue
│   │       └── SkillsItem.vue
│   ├── main.js
│   ├── plugins/
│   │   └── vuetify.js
│   └── utils
│       └── filters.js
└── tests
```

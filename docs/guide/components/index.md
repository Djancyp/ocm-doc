## Create Custom Component

```bash
 cec create-component <name of the component> -f <source>
```

<!-- Usage: cec create-component name | cec cc name -->
<!---->
<!-- Creates the component name. By default, it creates a local component. Optionally specify -f -->
<!---->
<!-- <source> to create from a different source. -->

Valid values for source are:

```bash
local
local-template
local-iframe
local-preact
local-react
remote
sectionlayout
Sample-File-List
Sample-Folder-List
Sample-Documents-Manager
Sample-Process-Start-Form
Sample-Process-Task-List
Sample-Process-Task-Details
Sample-Stocks-Embedded
Sample-Text-With-Image
Sample-To-Do
Anchor
ContentForm
Document-Search
JET-CCA-Demo-Card
MapFieldEditor
RSSTemplate
Sample-OPA-Interview
SimpleHTML
SliderFieldEditor
TextFieldEditor
TranslationJobEditor
```

## Enigen Custom React Component with Webpack

```bash
    git clone git@github.com:Djancyp/ocm-react.git ./src/components
    cd src/components/Header/assets
    npm installl
```

::: tip
make sure your running the code above in root dir
:::

::: danger
Before than deploy custom react app remove all node_modules folder.
:::

## How does it work.

````bash

.
├── appinfo.json
├── assets
│   ├── common.mjs
│   ├── compile-babel.config.json
│   ├── compile.mjs
│   ├── dist
│   │   ├── bundle.mjs
│   │   ├── bundle.mjs.LICENSE.txt
│   │   ├── bundle-server.mjs
│   │   └── bundle-server.mjs.LICENSE.txt
│   ├── lib
│   │   ├── compile-template.mjs
│   │   ├── render-template.mjs
│   │   └── settings.mjs
│   ├── package.json
│   ├── render-babel.config.json
│   ├── render.js
│   ├── render.mjs
│   ├── settings.html
│   ├── settings.jsx
│   ├── src
│   │   ├── App.jsx
│   │   ├── components
│   │   │   ├── example.jsx
│   │   │   └── Menu.jsx
│   │   └── index.js
│   ├── styles
│   │   └── design.css
│   ├── tailwind.config.js
│   ├── webpack.config.js
│   ├── webpack.server-config.js
│   └── yarn.lock
├── _folder_icon.png
├── _folder.json
└── README.md
````
## Aplication Dir
````bash
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── example.jsx
│   │   └── Menu.jsx
│   └── index.js
````
::: info
for style use ./style/desing.css
:::


## Compile Custom React component

::: info
make sure your in the assets/ forlder in component
:::


````bash
yarn build
````
this will create a bundle of the app

````bash
├── dist
│   ├── bundle.mjs
│   ├── bundle.mjs.LICENSE.txt
│   ├── bundle-server.mjs
│   └── bundle-server.mjs.LICENSE.txt
````


# neutralino-solid-vite

[Neutralino](https://neutralino.js.org/) app template with [solid](https://solidjs.com), vite and typescript for the frontend.

## Features

- configured neutralino frontend api
- frontend HMR support
- `dev` and `build` npm scripts

## Installation

First you create new neutralino app with their `neu` cli using this as a template by running this command

```bash
neu create myapp --template bartosz-dude/neutralinojs-solid-vite
```

Next you run this in the root folder of your project

```bash
npm install
```

This will also install all dependencies in `solid-src`

## Known problems

Vite doesn't exit when app window is closed via close button in dev mode

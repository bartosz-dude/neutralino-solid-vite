# neutralino-solid-vite

[Neutralino](https://neutralino.js.org/) app template with [solid](https://solidjs.com), vite and typescript for the frontend.

## Features

- configured neutralino frontend api
- frontend HMR support
- `dev` and `build` npm scripts

## Installation

Clone this repo

```bash
git clone https://github.com/bartosz-dude/neutralino-solid-vite.git
```

Next you run this npm script in the root folder of your project

```bash
npm install
```

This will install all dependencies and neutralino binaries

## Known problems

Vite doesn't exit when app window is closed via close button in dev mode

## Why the env

Neutralino requires `__neutralino_globals.js` in `index.html` on frontend to properly connect the frontend server to neutralino server.

Docs say to use patching from neutralino config on `index.html` when using dynamic neutralino port. This only works in dev.

Static neutralino port fixes this, but throws an error when trying to open second release instance.

Using `%PUBLIC_URL%` makes vite throw an `URI malformed` error in dev when using dynamic port, but works in release.

Using the vite env makes so that patching is used in dev and `%PUBLIC_URL%` in release.

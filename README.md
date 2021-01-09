# Vue Library-Monorepo Template

> A repository template for developing Vue 3 libraries in a monorepo powered by yarn workspaces

**STATE**: under heavy development ⚠️ This will likely not yet work as intended in some places/scenarios.

## What is this and who is it for?

This is a template to use for new Vue 3 library projects. It comes with a lot of [useful stuff pre-configured](#features) because I'm lazy.

This template is primarily meant for myself (but you can of course you it any way you please!). I wanted a template to quickly reach for when I want to start a new Vue project, especially for libraries.

As such, it is pretty opinionated, and probably does some things in way you don't like, or is missing something you deem essential. That's fine. Fork it and make it your own :)

It also uses a bunch of new/experimental things out of the Vue ecosystem (namely Vite and Vitepress), so expect some hick-ups while using those parts of the setup.

## Features

* Build your libraries powered by [tsdx](https//www.tsdx.io), adjusted/extended to work well with Vue
* Integrated playground app powered by [Vite](https://github.com/vitejs/vite)
* Documentation powered by [Vitepress](https://vitepress.vuejs.org)
  * [PLANNED] Netlify deployment pre-configured
* All-around Typescript-first approach (*except for config files etc.)
* Testing:
  * Unit Tests with [Jest](https://www.jestjs.io)
  * E2E Tests with [Cypress](https://www.cypress.io)
* Linting with `eslint` and `prettier`
  * [PLANNED] linting & fixing for staged files (`lint-staged`)
* [WIP] Changelog & release management via [Changesets](#)
* [PLANNED] boilerplate generator for new packages via [hygen](https://www.hygen.io)
* Proper config for using the Vetur VSCode extension in a monorepo


## Inspiration and prior art

This template is in huge parts inspired or directly copied from Jared Palmer's [tsdx-monorepo](https://github.com/jaredpalmer/tsdx-monorepo).

## Troubleshooting

[PLANNED] see wiki.

## Commands

All commands can be run directly from the project root like:

```bash
yarn start
```

Some of them use lerna to run multiple long-running (watch) tasks in parallel and stream their output to the terminal. 

> _❗️ If you are aware of a good replacement for this one task, please open an issue. This is the only thing I use lerna for, essentially, and I'd be happy to drop it for something lighter_

### `start`

runs a continuous build process for all packages in `/packages/*` using `tsdx watch`, so all packages rebuild whenever their code (or a dependency) changes.

### build

### play

starts the `Vite` dev server with the playground app for testing playing around with your libraries manually. Also is the app that cypress should test against.

### lint

### test

### cypress

### cypress:open

### changeset

### release

### version:canary

### release:canary

## Workflow

### Initial setup

### TDD

### Developing with the playground

### Pull requests

### Release Management

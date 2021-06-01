# Vue Library-Monorepo Template

> My personal repo template for developing Vue 3 libraries in a monorepo powered by yarn workspaces

**STATE**: WIP - under development ⚠️ This may not yet work as intended in some places/scenarios.

## What is this and who is it for?

This is a template to use for new Vue 3 library projects. It comes with a lot of [useful stuff pre-configured](#features) because I'm lazy.

This template is primarily meant for myself (but you can of course you it any way you please!). I wanted a template to quickly reach for when I want to start a new Vue project, especially for libraries.

As such, it is pretty opinionated, and probably does some things in way you don't like, or is missing something you deem essential. That's fine. Fork it and make it your own :)

It also uses a bunch of new/experimental things out of the Vue ecosystem (namely Vite and Vitepress), so expect some hick-ups while using those parts of the setup.

## Features

* ✅ Full Typescript support for the whole dev workflow
* ⚡️  Lightning-fast dev workflow completely powered by Vite:
  * ⚙️ Build your libraries with [Vite](https://github.com/vitejs/vite)
    * extract type declarations with `rollup-plugin-typescript2`, bundled with `rollup-plugin-dts`
  * 🏈 Integrated playground app powered by [Vite](https://github.com/vitejs/vite) as well
  * 📚 Documentation powered by [Vitepress](https://vitepress.vuejs.org)
* Testing:
  * 💊 Unit Tests with [Jest](https://www.jestjs.io)
  * 🖥 E2E Tests with [Cypress](https://www.cypress.io)
* 🖍 Linting with `eslint` and `prettier`
  * [PLANNED] linting & fixing for staged files (`lint-staged`)


## Inspiration and prior art

This template is in huge parts inspired or directly copied from Jared Palmer's [tsdx-monorepo](https://github.com/jaredpalmer/tsdx-monorepo).

## Documentation, FAQ and Troubleshooting

see Github wiki: ...(TBD)

## Commands

All commands can be run directly from the project root like:


```bash
yarn start
```
### build

Build everything: library packages, docs and playground app
### play

starts the `Vite` dev server for the playground app for testing playing around with your libraries manually. 

During `play`, no bundling has to be done as all of the library package's code is compiled JIT by Vite.

Also is the app that cypress can test against.

### lint

Run eslint on all packages

### test

Run `jest` unit tests on all packages
### cypress

### cypress:open
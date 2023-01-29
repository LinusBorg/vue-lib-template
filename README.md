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
  * 🎯 Build your libraries with [Vite](https://github.com/vitejs/vite)
  * ⛱️ Typechecking & Generating declaration files with `vue-tsc`(https://github.com/johnsoncodehk/volar/tree/master/vue-language-tools/vue-tsc)
  * 🏈 Integrated playground app powered by [Vite](https://github.com/vitejs/vite) as well
  * 📚 Documentation powered by [Vitepress](https://vitepress.vuejs.org)
* 💊 Unit Tests with [Vitest](https://www.vitest.dev)
* 🖍 Linting with `eslint` and `prettier`
  * [PLANNED] linting & fixing for staged files (`lint-staged`)

## Documentation, FAQ and Troubleshooting

see Github wiki: ...(TBD)

## Commands

All commands can be run directly from the project root like:

```bash
yarn start
```

We use pnpm to run commands in individual workspaces as needed.

### build

Build everything: library packages, docs and playground app
### `pnpm dev`

starts the `Vite` dev server for the playground app for testing playing around with your libraries manually. 

During `play`, no bundling has to be done as all of the library package's code is compiled JIT in the playground app.

This app can also be used for end-to-end tests (tooling for that currently not included in this template)

### `pnpm lint`

Run eslint on all packages

### `pnpm test`

Run `vitest` unit tests on all packages. Tests will start in watch mode by default. To ru tests once, you can run `test-ci` instead.
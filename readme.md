# TypeScript | Node.js | Express.js API Bootstrap (template)

This repository is intended to serve as a starting point if you want to bootstrap a quick API project in TypeScript.

⚠️ It is meant for simple use cases where you don't need the extra complexity, just a barebones, simple Node.js API. This has its shortcomings:
  - No proper DI framework/container/tool
  - No [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) structuring (I strongly suggest a DDD approach)
    - Coupling of infrastructure and application layers unless you separate them yourself

If these issues don't matter for your intended use, or you know how to fix them, this will be a fast way to have an API running. If you're looking for a more scalable strategy, check my TS DDD template (coming soon™) or if you're looking for a simple, plain Node.js app look at my [TypeScript Node.js Template](https://github.com/BoscoDomingo/typescript-skeleton)

## Features

- [TypeScript](https://www.typescriptlang.org/) (v5)
  - Find other `tsconfig.json` options [here](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Pure DI](https://blog.ploeh.dk/2014/06/10/pure-di/)
  - If you prefer using containers, check out [tsyringe](https://github.com/microsoft/tsyringe), [typescript-ioc](https://www.npmjs.com/package/typescript-ioc), [TypeDI](https://github.com/typestack/typedi), [NestJS](https://nestjs.com/), [InversifyJS](https://inversify.io/) or [Awilix](https://github.com/jeffijoe/awilix)
  - If you prefer mocking dependencies (no DI) use [proxyquire](https://www.npmjs.com/package/proxyquire)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Jest plugin](https://www.npmjs.com/package/eslint-plugin-jest)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to make Prettier and ESLint play nice together.
- [Jest](https://jestjs.io) (can be substituted with [`tap`](https://www.npmjs.com/package/tap))
  - Accompanied by [Supertest](https://www.npmjs.com/package/supertest) to test API calls. Not needed if you do proper DI with something like [NestJS](https://nestjs.com/).
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and formatting+linting on push

## Running the app

```
# install dependencies
npm install

# run in dev mode on port 3000 (or whichever you indicate in .env's `PORT`)
npm run dev

# generate production build
npm run build

# run generated content in dist folder on port 3000 (or whichever you indicate in .env's `PORT`)
npm run start
```

## Testing

### Jest with supertest

```
npm run test
```

## Formatting
```
npm run format
```


## Linting

```
# run linter
npm run lint

# fix lint issues
npm run lint:fix
```

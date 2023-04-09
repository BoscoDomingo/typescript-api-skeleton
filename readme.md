# TypeScript Express API Bootstrap (base / project starter)

This is a repository intended to serve as a starting point if you want to bootstrap a express API project in TypeScript.

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
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and linting on push

## Running the app

```
# install dependencies
npm install

# run in dev mode on port 3000
npm run dev

# generate production build
npm run build

# run generated content in dist folder on port 3000
npm run start
```

## Testing

### Jest with supertest

```
npm run test
```

## Linting

```
# run linter
npm run lint

# fix lint issues
npm run lint:fix
```

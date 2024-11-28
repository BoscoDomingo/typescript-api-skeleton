# TypeScript | Node.js | Express.js API Bootstrap (template)

This repository is intended to serve as a starting point if you want to bootstrap a quick API project in TypeScript.

⚠️ It is meant for simple use cases where you don't need the extra complexity, just a barebones, simple Node.js API. This has its shortcomings:
  - No proper DI framework/container/tool
  - No [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) structuring (I strongly suggest a DDD approach)
    - Coupling of infrastructure and application layers unless you separate them yourself

If these issues don't matter for your intended use, or you know how to fix them, this will be a fast way to have an API running. If you're looking for a more scalable strategy, check my [TS DDD template](https://github.com/AlexHHPS/typescript-ddd-hexagonal-ddd) or if you're looking for a simple, plain Node.js app look at my [TypeScript Node.js Template](https://github.com/BoscoDomingo/typescript-skeleton)

## Features

- [Pure DI](https://blog.ploeh.dk/2014/06/10/pure-di/). If you prefer using containers, check out:
  - [tsyringe](https://github.com/microsoft/tsyringe)
  - [typescript-ioc](https://www.npmjs.com/package/typescript-ioc)
  - [TypeDI](https://github.com/typestack/typedi)
  - [NestJS](https://nestjs.com/)
  - [InversifyJS](https://inversify.io/)
  - [Awilix](https://github.com/jeffijoe/awilix)
- [TypeScript](https://www.typescriptlang.org/) (v5)
  - Find other `tsconfig.json` options [here](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases)
- [pnpm](https://pnpm.io/) for package management
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
  - If you prefer mocking dependencies (no DI) use [proxyquire](https://www.npmjs.com/package/proxyquire)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to make Prettier and ESLint play nice together.
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) to allow for sorting the imports automatically.
  - [typescript-eslint](https://typescript-eslint.io/) for TS-specific rules
  - [Jest plugin](https://www.npmjs.com/package/eslint-plugin-jest) for Jest-specific rules
- [Jest](https://jestjs.io) (can be substituted with [`tap`](https://www.npmjs.com/package/tap))
  - Accompanied by [Supertest](https://www.npmjs.com/package/supertest) to test API calls. Not needed if you do proper DI with something like [NestJS](https://nestjs.com/).
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and formatting+linting on push

## Local dev

| Action               | Command           | Description                                          |
| -------------------- | ----------------- | ---------------------------------------------------- |
| Install dependencies | `pnpm i`          | Installs the necessary dependencies                  |
| Compile              | `pnpm build`      | Transpiles TS into JS                                |
| Compile (Production) | `pnpm build:prod` | Transpiles TS into JS removing unnecessary artifacts |
| Run                  | `pnpm start`      | Runs the compiled JS                                 |
| Dev                  | `pnpm dev`        | Runs the TypeScript code and watches for changes     |
| Debug                | `pnpm dev:debug`  | Same as Dev but also attaches the debugger           |

## Testing

### Jest
| Action | Command     | Description        |
| ------ | ----------- | ------------------ |
| Test   | `pnpm test` | Runs all the tests |

## Formatting
| Action | Command       | Description                       |
| ------ | ------------- | --------------------------------- |
| Format | `pnpm format` | Ensures code follows style guides |


## Linting
| Action     | Command         | Description                                    |
| ---------- | --------------- | ---------------------------------------------- |
| Lint       | `pnpm lint`     | Runs the linter and points out mistakes        |
| Lint + Fix | `pnpm lint:fix` | Same as above but fixing auto-fixable problems |

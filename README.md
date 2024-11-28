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
  - If you prefer mocking dependencies (no DI) use [proxyquire](https://www.npmjs.com/package/proxyquire)
- [TypeScript](https://www.typescriptlang.org/)
  - Find other `tsconfig.json` options [here](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases)
  - [tsx](https://tsx.is/) when running TS files directly
- [pnpm](https://pnpm.io/) for package management
- [Biome](https://biomejs.dev/) for formatting and linting.
- [Node Test Runner](https://nodejs.org/api/test.html) for testing.
  - Accompanied by [Supertest](https://www.npmjs.com/package/supertest) to test API calls.
- [GitHub Action workflows](https://github.com/features/actions) set up to run tests and formatting+linting on push

## Local dev

| Action               | Command          | Description                                      |
| -------------------- | ---------------- | ------------------------------------------------ |
| Install dependencies | `pnpm i`         | Installs the necessary dependencies              |
| Compile              | `pnpm build`     | Transpiles TS into JS                            |
| Run                  | `pnpm start`     | Runs the compiled JS                             |
| Dev                  | `pnpm dev`       | Runs the TypeScript code and watches for changes |
| Debug                | `pnpm dev:debug` | Same as Dev but also attaches the debugger       |

## Testing

### Node Test Runner
| Action | Command           | Description                                   |
| ------ | ----------------- | --------------------------------------------- |
| Test   | `pnpm test`       | Runs all the tests                            |
| Test   | `pnpm test:debug` | Runs all the tests with the debugger attached |

## Formatting
| Action | Command       | Description                             |
| ------ | ------------- | --------------------------------------- |
| Lint   | `pnpm lint`   | Runs the linter and points out mistakes |
| Format | `pnpm format` | Ensures code follows style guides       |

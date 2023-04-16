import { Router } from 'express';

import BaseController from '../../src/controllers/base.controller';
import BaseRouter from '../../src/routes/base.route';
import { checkJSON } from '../../src/utils/middleware';

describe('BaseRouter', () => {
  let mockSampleController: jest.Mocked<BaseController>;
  let baseRouter: BaseRouter;
  let configuredRouter: Router;

  beforeEach(() => {
    mockSampleController = {
      getSampleData: jest.fn(),
      postReceivedData: jest.fn(),
    } as unknown as jest.Mocked<BaseController>;

    baseRouter = new BaseRouter(mockSampleController);
    configuredRouter = baseRouter.configureRouter();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('configureRouter', () => {
    it('should configure the router and return it', () => {
      expect(configuredRouter).toBeDefined();
      expect(configuredRouter.stack[0].route).toBeDefined();
      expect(configuredRouter.stack[0].route.path).toEqual('/');
      expect(configuredRouter.stack[0].route.methods).toHaveProperty('get');
      expect(configuredRouter.stack[0].route.methods).toHaveProperty('post');

      const getRoute = configuredRouter.stack.find(
        (layer: any) =>
          layer.route &&
          layer.route.path === '/' &&
          layer.route.stack.some(
            (middleware: any) => middleware.method === 'get',
          ),
      );

      const postRoute = configuredRouter.stack.find(
        (layer: any) =>
          layer.route &&
          layer.route.path === '/' &&
          layer.route.stack.some(
            (middleware: any) =>
              middleware.method === 'post' && middleware.handle === checkJSON,
          ) &&
          layer.route.stack.some(
            (middleware: any) =>
              middleware.method === 'post' && middleware.name === 'jsonParser',
          ),
      );

      expect(getRoute).toBeDefined();
      expect(postRoute).toBeDefined();
    });
  });
});

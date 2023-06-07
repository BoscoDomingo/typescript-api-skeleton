import { NextFunction, Request, Response } from 'express';

import sampleData from '../../data/sample.json';
import BaseController from '../../src/controllers/base.controller.js';
import BaseService from '../../src/services/base.service.js';

jest.mock('../../src/services/base.service', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getSampleData: jest.fn(() => {
        return sampleData;
      }),
    };
  });
});

describe('BaseController', () => {
  let baseService: BaseService;
  let baseController: BaseController;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    baseService = new BaseService(sampleData);
    baseController = new BaseController(baseService);
    req = {} as Request;
    res = {
      json: jest.fn(),
      send: jest.fn(),
    } as unknown as Response;
    next = jest.fn() as NextFunction;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getSampleData', () => {
    it('should call baseService.getSampleData() and return JSON response', () => {
      baseController.getSampleData(req, res, next);

      expect(baseService.getSampleData).toHaveBeenCalledTimes(1);
      expect(res.json).toHaveBeenCalledWith(sampleData);
    });

    it('should return an error when baseService.getSampleData() fails', () => {
      baseService.getSampleData = jest.fn(() => {
        throw new Error('Failed to get sample data');
      });

      baseController.getSampleData(req, res, next);

      expect(next).toHaveBeenCalledWith(Error('Failed to get sample data'));
    });
  });

  describe('postReceivedData', () => {
    it('should stringify and return received data in JSON response', () => {
      const receivedData = { data: 'Received data' };
      req.body = receivedData;

      baseController.postReceivedData(req, res, next);

      expect(res.json).toHaveBeenCalledWith({
        message: `Message received`,
        data: JSON.stringify(receivedData, null, 2),
      });
    });

    it('should return an error when the received data is not a valid format', () => {
      JSON.stringify = jest.fn(() => {
        throw new Error('Failed to parse');
      });

      baseController.postReceivedData(req, res, next);

      expect(next).toHaveBeenCalledWith(Error('Failed to parse'));
    });
  });
});

import { NextFunction, Request, Response } from 'express';

import BaseService from '../services/base.service.js';

export default class BaseController {
  constructor(private readonly baseService: BaseService) {}

  public getSampleData(_req: Request, res: Response, next: NextFunction): void {
    try {
      const sampleData = this.baseService.getSampleData();
      res.json(sampleData);
    } catch (error) {
      next(error);
    }
  }

  public postReceivedData(
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
    try {
      const data = JSON.stringify(req.body, null, 2);
      res.json({ message: `Message received`, data });
    } catch (error) {
      next(error);
    }
  }
}

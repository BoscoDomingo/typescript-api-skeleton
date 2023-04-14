import { Request, Response } from 'express';

import BaseService from '../services/base.service';

export default class BaseController {
  constructor(private readonly baseService: BaseService) {}

  public getSampleData(req: Request, res: Response): void {
    const sampleData = this.baseService.getSampleData();
    res.json(sampleData);
  }

  public postReceivedData(req: Request, res: Response): void {
    const data = JSON.stringify(req.body, null, 2);
    res.json({ message: `Received data: ${data}` });
  }
}

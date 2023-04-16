import { json, Router } from 'express';

import BaseController from '../controllers/base.controller';
import { checkJSON } from '../utils/middleware';

export default class BaseRouter {
  constructor(
    private readonly sampleController: BaseController,
    private readonly router = Router(),
  ) {}

  public configureRouter(): Router {
    this.configureRoutes();
    return this.router;
  }

  private configureRoutes(): void {
    this.router
      .route('/')
      .get(this.sampleController.getSampleData.bind(this.sampleController))
      .post(
        checkJSON,
        json(),
        this.sampleController.postReceivedData.bind(this.sampleController),
      );
  }
}

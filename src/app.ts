import path from 'path';

import dotenv from 'dotenv';
import express, { Errback, ErrorRequestHandler, NextFunction, Request, Response } from 'express';

import sampleData from '../data/sample.json';

import BaseController from './controllers/base.controller';
import BaseRouter from './routes/base.route';
import BaseService from './services/base.service';

dotenv.config();
const app = express();

app.set('port', process.env.PORT ?? 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }),
);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// DI (Composition Root)
const baseService = new BaseService(sampleData);
const baseController = new BaseController(baseService);
const baseRouter = new BaseRouter(baseController);

app.use('/', baseRouter.configureRouter());

export default app;

import 'reflect-metadata';
import './database';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/index';
import AppError from './errors/AppError';

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at ${process.env.PORT} door`);
});

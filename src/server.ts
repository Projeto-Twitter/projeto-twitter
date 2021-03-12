require('dotenv').config();

import 'reflect-metadata';
import './database';
import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import router from './routes/index';
import AppError from './errors/AppError';

const app = express();

app.use(router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  console.error(err);

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(process.env.PORT, ()=>{
  console.log(`Server started at ${process.env.PORT} door`);
});

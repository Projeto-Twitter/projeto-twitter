require('dotenv').config();

import express from 'express';
import router from './routes/index';

const app = express();

app.use(router);


app.listen(process.env.PORT, ()=>{
  console.log(`Server started at ${process.env.PORT} door`);
});

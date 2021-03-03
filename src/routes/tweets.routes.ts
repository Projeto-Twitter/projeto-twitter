import { Router } from 'express';

const tweetsRouter = Router();

tweetsRouter.get('/', (request, response)=> {
  response.send('tweets Page');
});

export default tweetsRouter;

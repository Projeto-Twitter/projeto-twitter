import { Router } from 'express';

const commentsRouter = Router();

commentsRouter.get('/', (request, response)=> {
  response.send('Comments Page');
});

export default commentsRouter;

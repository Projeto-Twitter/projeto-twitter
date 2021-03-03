import { request, response, Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response)=> {
  response.send('Users Page');
});

export default usersRouter;

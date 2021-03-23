import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthentication';

const commentsRouter = Router();

commentsRouter.use(ensureAuthenticated)

commentsRouter.get('/', (request, response)=> {
  response.send('Comments Page');
});

export default commentsRouter;

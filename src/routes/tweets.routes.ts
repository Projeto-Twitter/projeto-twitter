import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthentication';

import FindTweetsService from '../services/FindTweetsService';

const tweetsRouter = Router();

// list all tweets of a user
tweetsRouter.get('/', ensureAuthenticated, async (request, response)=> {
  const findTweetsService = new FindTweetsService();

  const userId = request.user.id;
  const tweets = findTweetsService.execute({ userId });

  return response.status(200).json(tweets);
});

export default tweetsRouter;

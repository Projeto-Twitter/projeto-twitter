import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthentication';

import FindTweetsService from '../services/FindTweetsService';
import CreateTweetService from '../services/CreateTweetService';

const tweetsRouter = Router();

// list all tweets of a user
tweetsRouter.get('/', ensureAuthenticated, async (request, response)=> {
  const findTweetsService = new FindTweetsService();

  const userId = request.user.id;
  const tweets = await findTweetsService.execute({ userId });

  return response.status(200).json(tweets);
});

// create a tweet
tweetsRouter.post('/', ensureAuthenticated, async (request, response) => {
  const userId = request.user.id;
  const { text } = request.body;
  const createTweetService = new CreateTweetService();

  const { tweet, comment } = await createTweetService.execute({userId,text});

  return response.status(200).json({tweet, comment});
})

export default tweetsRouter;

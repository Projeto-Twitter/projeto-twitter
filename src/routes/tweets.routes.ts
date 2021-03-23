import { response, Router } from 'express';
import Tweet from 'models/Tweet';
import { getRepository } from 'typeorm';
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

// curtir tweet
tweetsRouter.patch('/like/:id', ensureAuthenticated, async (request, response) => {
  const { id } = request.params;
  const tweetsRepository = getRepository(Tweet);
  const tweet = await tweetsRepository.findOne({
    where: {id}
  });

  if(!tweet) {
    return response.status(400).json('Tweet does not exist');
  }

  await tweetsRepository.update({id: tweet.id}, {likes_amount: tweet.answer_amount + 1});
})

export default tweetsRouter;

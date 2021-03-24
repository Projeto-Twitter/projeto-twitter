import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthentication';
import CreateCommentService from '../services/CreateCommentService';
import FindCommentsByTweetId from '../services/FindCommentsByTweetId';

const commentsRouter = Router();

commentsRouter.use(ensureAuthenticated)

commentsRouter.post('/', ensureAuthenticated, async (request, response)=> {
  const { tweetId, text } = request.body;

  const createCommentsService = new CreateCommentService();

  const comment = await createCommentsService.execute({tweetId, text});

  return response.status(200).json(comment);
});

commentsRouter.get('/:tweetId', ensureAuthenticated, async (request, response) => {
  const { tweetId } = request.params;

  const findCommentsByTweetId = new FindCommentsByTweetId();

  const tweets = await findCommentsByTweetId.execute({tweetId});

  return response.status(200).json(tweets);
});

export default commentsRouter;

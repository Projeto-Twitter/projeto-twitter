import { getRepository } from 'typeorm';
import Tweet from '../models/Tweet';
import Comment from '../models/Comment';
import AppError from '../errors/AppError';

interface Request {
  tweetId: string;
  text: string;
}

class CreateCommentService {
  public async execute({ tweetId, text }: Request): Promise<Comment> {
    const tweetsRepository = getRepository(Tweet);
    const commentsRepository = getRepository(Comment);

    const tweet = await tweetsRepository.findOne({
      where: {id: tweetId}
    });

    if (!text) {
      throw new AppError('Can not create comments without data', 400);
    }

    if(!tweet) {
      throw new AppError('Tweet was not found!');
    }
    const comment = await commentsRepository.create({tweets_id: tweetId, text });
    await commentsRepository.save(comment);

    return comment;
  }
}

export default CreateCommentService;

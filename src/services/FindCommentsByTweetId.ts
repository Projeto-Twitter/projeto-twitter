import { getRepository } from 'typeorm';
import Comment from '../models/Comment';
import Tweet from '../models/Tweet';
import AppError from '../errors/AppError';

interface Request {
  tweetId: string;
}

class FindCommentsByTweetId {
  public async execute({tweetId}: Request): Promise<Comment[]> {
    const commentsRepository = getRepository(Comment);
    const tweetsRepository = getRepository(Tweet);

    const tweet = await tweetsRepository.findOne({
      where: {id: tweetId}
    });

    if(!tweet){
      throw new AppError('tweet was not found!', 400);
    }

    const comments = await commentsRepository.find({
      where: {tweets_id: tweet.id}
    });

    if(!comments) {
      throw new AppError('This tweet does not have comments');
    }

    return comments
  }
}

export default FindCommentsByTweetId;

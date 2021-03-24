import { getRepository } from 'typeorm';
import Tweet from '../models/Tweet';
import Comment from '../models/Comment';
import AppError from '../errors/AppError';

interface Request {
  userId: string;
  text: string;
}

interface Response {
  tweet: Tweet;
  comment: Comment;
}

class CreateTweetService {
  public async execute({ userId, text }: Request): Promise<Response> {
    const commentsRepository = getRepository(Comment);
    const tweetsRepository = getRepository(Tweet);

    if(!text) {
      throw new AppError('Can not create a tweet without a text');
    }

    const tweet = tweetsRepository.create({users_id: userId});
    const comment = commentsRepository.create({tweets_id: tweet.id, text});
    await commentsRepository.save(comment);
    await tweetsRepository.save(tweet);

    return {
      tweet,
      comment
    };
  }
}

export default CreateTweetService

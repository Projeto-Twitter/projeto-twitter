import { getRepository } from 'typeorm';
import Tweet from '../models/Tweet';
import AppError from '../errors/AppError';

interface Request {
  userId: string;
}

class FindTweetsService {
  public async execute({ userId }: Request): Promise<Tweet[]|undefined> {
    const tweetsRepository = getRepository(Tweet);
    const tweets = await tweetsRepository.find({
      where: {user_id: userId}
    });

    if (!tweets) {
      throw new AppError('This user does not have tweets!', 400);
    }

    return tweets;
  }
}

export default FindTweetsService

import { cpuUsage } from 'process';
import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import Comment from '../models/Comment';
import ActionsRepository from './ActionsRepository';

@EntityRepository(Comment)
class CommentsRepository extends Repository<Comment> {

  public async findAllCommentsByUserId(user_id: string): Promise<Comment[]|undefined> {
    const actionsRepository = getCustomRepository(ActionsRepository)
    const action = await actionsRepository.findOne({
      where: {user_id}
    })
    const comments = await this.find({
      where: action?.comment_id,
    })

    return comments;

  }

  public async findAllCommentsByTweetId(tweet_id: string): Promise<Comment[] | undefined> {
    const actionsRepository = getCustomRepository(ActionsRepository);
    const action = await actionsRepository.findOne({
      where: {tweet_id}
    })

    const comments = await this.find({
      where: action?.comment_id,
    })

    return comments
  }

}

export default CommentsRepository;

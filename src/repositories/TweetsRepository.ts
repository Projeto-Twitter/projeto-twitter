import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import Tweet from '../models/Tweet';
import ActionsRepository from './ActionsRepository';

@EntityRepository(Tweet)
class TweetsRepository extends Repository<Tweet> {

  public async findAllTweetsByUserId(user_id: string): Promise<Tweet[]|undefined> {
    const actionsRepository = getCustomRepository(ActionsRepository)
    const action = await actionsRepository.findOne({
      where: {user_id}
    })
    const tweets = await this.find({
      where: action?.tweet_id
    })

    return tweets;

  }
}

export default TweetsRepository;

//pegar a acao referente ao tweet e usuario
//procurar os tweets que tem o mesmo id que a foreign key da acao

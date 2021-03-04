import { EntityRepository, Repository } from 'typeorm';

import Action from '../models/Action'

@EntityRepository(Action)
class ActionsRepository extends Repository<Action> {}

export default ActionsRepository;

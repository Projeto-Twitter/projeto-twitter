import { EntityRepository, Repository } from 'typeorm';

import User from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async findByName(name: string):Promise<User | undefined> {
    const user = await this.findOne({
      where: {name}
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {email}
    });

    return user;
  }

  public async findByUsername(username: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {username}
    });

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {id}
    });

    return user;
  }

}

export default UsersRepository;

// findByName
// findByEmail
// findByUsername
// findById
//

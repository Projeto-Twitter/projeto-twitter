import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
  name?: string;
  username?: string;
}

class SearchUsersService {
  public async execute({ name, username}: Request): Promise<User[]> {
    const usersRepository = getRepository(User);
    if(!name && !username) {
      throw new AppError('Can not search for user without data', 400);
    }

    const users = await usersRepository.find({
      where: [
        {name},
        {username}
      ]
    });

    if (!users) {
      throw new AppError('No user found', 400);
    }

    return users;
  }
}

export default SearchUsersService;

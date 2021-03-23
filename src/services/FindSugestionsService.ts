import { getRepository } from 'typeorm';
import User from '../models/User';
import Address from '../models/Address';
import AppError from '../errors/AppError';

interface Request {
  userId: string;
}

class FindSugestionsService {
  public async execute({ userId }: Request): Promise<User[]|undefined>{
    const usersRepository = getRepository(User);
    const adressesRepository = getRepository(Address);

    const user = await usersRepository.findOne({
      where: {id: userId}
    });

    const address = await adressesRepository.findOne({
      where: {id: user?.address_id}
    });

    if (!address) {
      throw new AppError('Can not find sugestions', 400);
    }

    const sugestions = await usersRepository.find({
      where: {address_id: address.id}
    });

    if (!sugestions) {
      throw new AppError('Can not find sugestions');
    };

    return sugestions;
  }
}

export default FindSugestionsService

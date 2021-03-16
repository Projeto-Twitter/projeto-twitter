import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import User from '../models/User';
import Address from '../models/Address';

interface Request {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  cityName?: string;
  stateName?: string;
}

class UpdateUserService {
  public async execute({ name, email, phone, cityName, stateName, id }: Request): Promise<User|undefined> {
    const usersRepository = getRepository(User);
    const addressRepository = getRepository(Address);

    const user = await usersRepository.findOne({
      where:{id}
    });

    if(!user) {
      throw new AppError('This user does not exists',400);
    }

    if(name && user.name != name) {
      await usersRepository.update({id}, {name});
    }

    if(email && user.email != name) {
      await usersRepository.update({id},{email});
    }
    if(phone && user.phone != phone) {
      await usersRepository.update({id}, {phone})
    }

    if(cityName && stateName) {
      const address = await addressRepository.findOne({
        where: {city: cityName, state: stateName}
      });

      if(!address) {
        const address = addressRepository.create({city: cityName, state: stateName});
        await addressRepository.save(address);

        await usersRepository.update({id},{address_id: address.id})
      }

      await usersRepository.update({id}, {address_id: address?.id})
    }

    const updatedUser = await usersRepository.findOne({
      where: {id}
    });

    // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
    delete(updatedUser.password);

    return updatedUser;
  }
}

export default UpdateUserService;

import { getRepository } from 'typeorm';
import Address from '../models/Address';
import AppError from '../errors/AppError';

interface Request {
  city: string;
  state: string;
}

class CreateAddressService {
  public async execute({ city, state }: Request): Promise<Address> {
    const addressrepository = getRepository(Address);
    const checkAddressExist = addressrepository.findOne({
      where: { city, state },
    });

    if (!checkAddressExist) {
      throw new AppError('This address already exists', 406);
    }

    const newAddress = addressrepository.create({ city, state });
    console.log(newAddress);
    const address = await addressrepository.save(newAddress);

    return address;
  }
}

export default CreateAddressService;

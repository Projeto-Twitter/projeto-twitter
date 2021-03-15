import { getRepository } from 'typeorm';
import Address from '../models/Address';

interface Request {
  city: string;
  state: string;
}

class FindAddressService {
  public async execute({ city, state }: Request): Promise<Address|undefined> {
    const addressRepository = getRepository(Address);

    const address = addressRepository.findOne({
      where: {city, state}
    });

    return address;
  }
}

export default FindAddressService;

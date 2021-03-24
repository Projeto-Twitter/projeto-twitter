import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
  phone: string;
  born: Date;
}

class CreateUserService {
  public async execute({
    name,
    email,
    phone,
    password,
    born,
  }: Request): Promise<User> {
    const userRepository = getRepository(User);
    const usernameHash = await hash(name, 1);
    const userName = name + '@' + usernameHash.substr(0,6);

    if (email) {
      const checkUser = await userRepository.findOne({
        where: { email },
      });

      if (checkUser) {
        throw new AppError('User email already exists', 400);
      }
    } else {
      const checkUser = await userRepository.findOne({
        where: { phone },
      });

      if (checkUser) {
        throw new AppError('User email already exists', 400);
      }
    }

    if (!born) {
      throw new AppError('data de nascimento inválida');
    }


    const user = userRepository.create({
      name,
      email,
      password: password,
      phone,
      username: userName,
      born,
    });
    await userRepository.save(user);

    // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
    delete user.password;

    return user;
  }
}

export default CreateUserService;

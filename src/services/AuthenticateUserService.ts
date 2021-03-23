import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import User from '../models/User';
import AppError from '../errors/AppError';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface Request {
  email?: string;
  phone?: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, phone, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: [
        {email},
        {phone}
      ]
    });

    if (!user) {
      throw new AppError('Incorrect credentials combination');
    }

    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched) {
      throw new AppError('Incorrect credentials combination');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret,{
      subject: user.id,
      expiresIn: expiresIn,
    });

    return {
      user,
      token
    };
  }
}

export default AuthenticateUserService;

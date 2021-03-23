import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateUserService from '../services/CreateUsersService';
import UpdateUserService from '../services/UpdateUserService';
import User from '../models/User';
import ensureAuthenticated from '../middlewares/ensureAuthentication';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password, phone, born } = request.body;
  const createUserService = new CreateUserService();
  const user = await createUserService.execute({
    name,
    email,
    phone,
    password,
    born,
  });

  return response.status(200).json(user);
});

usersRouter.get('/:id', (request, response) => {
  const { id } = request.params;
  const userRepository = getRepository(User);
  const user = userRepository.findOne({
    where: { id },
  });
  if (!user) {
    return response.status(400).json('User not found');
  }

  return response.status(200).json(user);
});

usersRouter.put('/:id', ensureAuthenticated, async (request, response) => {
  const { id } = request.params;
  const data = request.body;
  data.userId = id;
  const updateUserService = new UpdateUserService();

  const user = await updateUserService.execute({
    id: data.userId,
    email: data.email,
    name: data.name,
    phone: data.phone,
  });

  return response.status(200).json(user);
});

export default usersRouter;

// pegar os dados
// validar se a combinacao das senhas batem
// colocar nome da cidade e estado em lowercase e sem caracteres especiais
// validar o endereco ja existe
// se o endereco existir colocar o id do endereco no objeto do user
// se o endereco nao existir criar um novo endereco e usar o id do endereco novo no objeto do user
// criar o user
// retornar o user

/** *
 *   id: string;
  name: string;
  email: string;
  phone: string;
  cityName: string;
  stateName: string;
 */

import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

import CreateUserService from '../services/CreateUsersService';
import UpdateUserService from '../services/UpdateUserService';
import FindSugestionsService from '../services/FindSugesionsService';
import SearchUsersService from '../services/SearchUsersService';

import ensureAuthenticated from '../middlewares/ensureAuthentication';
import email from '../emails/Mail';
const emailService = email();


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

//
usersRouter.get('/', ensureAuthenticated, async (request, response) => {
  const { name, username } = request.body;

  const searchUsersService = new SearchUsersService();

  const users = await searchUsersService.execute({name,username});

  return response.status(200).json(users);

});

usersRouter.get('/sugestion', ensureAuthenticated, async (request, response)=> {
  const userId = request.user.id;
  const findSugestionsService = new FindSugestionsService();

  const sugestions = await findSugestionsService.execute({userId});

  return response.status(200).json(sugestions);
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

usersRouter.get('/forgot-password', ensureAuthenticated, async (request, response) => {

  const { email } = request.body;
  const usersRepository = getRepository(User);

  const user = await usersRepository.findOne({
    where: {email}
  });

  if (!user){
    return response.status(400).json('this user does not exists');
  }

  await emailService.emailForForgotPassword('', user.password, user.email);

  return response.status(200).json('password was send to user email');

})

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

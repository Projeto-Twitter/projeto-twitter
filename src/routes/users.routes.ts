import { Router } from 'express';
import FindAddressService from '../services/FindAddressService';
import CreateUserService from '../services/CreateUsersService';
import CreateAddressService from '../services/CreateAddressService';
const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const {
    name,
    email,
    password,
    phone,
    born
  } = request.body;

  const createUserService = new CreateUserService();

  const user = await createUserService.execute({ name, email, phone, password, born});

  return response.status(200).json(user);

});


usersRouter.get('/', (request, response)=> {

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


// rota de criacao do usuario NAO deve ter validacao da existencia do endereco!!!!!!!!!

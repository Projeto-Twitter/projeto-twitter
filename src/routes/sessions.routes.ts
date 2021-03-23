
import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, phone, password } = request.body;
  const authenticateUserService = new AuthenticateUserService();

  const { user, token } = await authenticateUserService.execute({ email, phone, password });

  // @ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
  delete(user.password);

  return response.json({ user, token });
});

export default sessionsRouter;

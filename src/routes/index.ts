import express from 'express';
import usersRouter from './users.routes';
import tweetsRouter from './tweets.routes';
import commentsRouter from './comments.routes';
import sessionsRouter from './sessions.routes';

const router = express.Router();

router.get('/', (request, response) => {
  return response.status(200).send('Welcome to our fake twitter server');
});

router.use('/sessions', sessionsRouter);
router.use('/users', usersRouter);
router.use('/tweets', tweetsRouter);
router.use('/comments', commentsRouter);

export default router;

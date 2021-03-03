import express from 'express';
import usersRouter from './users.routes';
import tweetsRouter from './tweets.routes';
import commentsRouter from './comments.routes';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/tweets', tweetsRouter);
router.use('/comments', commentsRouter);

export default router;

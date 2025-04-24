import express from 'express';
import userRouter from './user.js';
import postRouter from './post.js';

const router = express.Router();

router.use('/users', userRouter);

router.use('/posts', postRouter);

export default router;

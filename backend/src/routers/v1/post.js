import express from 'express';
import { isAuthenticated } from '../../middlewares/authViaCookies.js';
import { validate } from '../../validators/zodValidator.js';
import { zodPostSchema } from '../../validators/zodPostSchema.js';
import {
  createPostController,
  deletePostController
} from '../../controller/postController.js';

const router = express.Router();

router.post(
  '/',
  isAuthenticated,
  validate(zodPostSchema),
  createPostController
);

router.delete('/:id', isAuthenticated, deletePostController);

export default router;

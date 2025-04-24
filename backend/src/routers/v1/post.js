import express from 'express';
import { isAuthenticated } from '../../middlewares/authViaCookies.js';
import { validate } from '../../validators/zodValidator.js';
import { zodPostSchema } from '../../validators/zodPostSchema.js';
import { createPostController } from '../../controller/postController.js';

const router = express.Router();

router.post(
  '/',
  isAuthenticated,
  validate(zodPostSchema),
  createPostController
);

export default router;

import express from 'express';
import {
  signinController,
  signUpController
} from '../../controller/userController.js';
import { validate } from '../../validators/zodValidator.js';
import { zodSignupSchema } from '../../validators/zodSignupSchema.js';
import { zodSigninSchema } from '../../validators/zodSigninSchema.js';

const router = express.Router();

router.post('/signup', validate(zodSignupSchema), signUpController);

router.post('/signin', validate(zodSigninSchema), signinController);

export default router;

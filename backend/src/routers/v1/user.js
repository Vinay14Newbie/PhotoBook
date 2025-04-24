import express from 'express';
import {
  getAllUsersController,
  signinController,
  signUpController
} from '../../controller/userController.js';
import { validate } from '../../validators/zodValidator.js';
import { zodSignupSchema } from '../../validators/zodSignupSchema.js';
import { zodSigninSchema } from '../../validators/zodSigninSchema.js';
import { isAuthenticated } from '../../middlewares/authViaCookies.js';

const router = express.Router();

router.post('/signup', validate(zodSignupSchema), signUpController);

router.post('/signin', validate(zodSigninSchema), signinController);

router.get('/all', isAuthenticated, getAllUsersController);

export default router;

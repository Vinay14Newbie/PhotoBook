import express from 'express';
import { signUpController } from '../../controller/userController.js';
import { validate } from '../../validators/zodValidator.js';
import { zodSignupSchema } from '../../validators/zodSignupSchema.js';

const router = express.Router();

router.post('/signup', validate(zodSignupSchema), signUpController);

export default router;

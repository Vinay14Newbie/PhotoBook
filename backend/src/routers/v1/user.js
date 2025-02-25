import express from 'express';
import { signUpController } from '../../controller/userController.js';

const router = express.Router();

router.post('/signup', signUpController);

export default router;

import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/serverConfig.js';

export const generateJwtToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
};

export const verifyJwtToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
  // return output for above line
  //  {
  //   email: 'aman@gmail.com',
  //     _id: '6730a467663033a9aa7d4969',
  //     username: 'aman deogade',
  //     iat: 1731301135,
  //     exp: 1731387535
  //   }
};

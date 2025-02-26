import userRepository from '../repositories/userRespository.js';
import bcrypt from 'bcrypt';
import { generateJwtToken } from '../utils/jwt.js';

export const signUpService = async (data) => {
  try {
    const user = await userRepository.create(data);
    return user;
  } catch (error) {
    if (error.code === 11000 && error.name === 'MongoServerError') {
      throw {
        status: 400, //bad request
        message: 'User with the same username or email address already exists'
      };
    }
    throw error;
  }
};

export const signinService = async (data) => {
  try {
    // 1- check if user exist
    const user = await userRepository.getByMail(data.email);
    if (!user) {
      throw {
        status: 404,
        message: 'User not found'
      };
    }

    // 2- check the password
    const isPasswordValid = bcrypt.compareSync(data.password, user.password);

    if (!isPasswordValid) {
      throw {
        status: 401,
        message: 'Invalid password'
      };
    }

    // 3- generate jwt
    const token = generateJwtToken({
      email: user.email,
      _id: user._id,
      username: user.username,
      role: data.role || 'user'
    });

    return token;
  } catch (error) {
    throw error;
  }
};

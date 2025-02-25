import userRepository from '../repositories/userRespository.js';

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

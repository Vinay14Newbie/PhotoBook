import { signinService, signUpService } from '../services/userService.js';

export const signUpController = async (req, res) => {
  try {
    const user = await signUpService(req.body);

    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: user
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to create a user'
    });
  }
};

export const signinController = async (req, res) => {
  try {
    const token = await signinService(req.body);
    return res.status(200).json({
      success: true,
      message: 'User signed in successfully',
      token: token
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message
      });
    }
    return res.status(500).json({
      success: false,
      message: 'Failed to signin user'
    });
  }
};

import { checkIfUserExistService } from '../services/userService.js';
import { verifyJwtToken } from '../utils/jwt.js';

export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(400).json({
      success: false,
      message: 'token is required, User not signed in'
    });
  }

  try {
    const response = verifyJwtToken(token);
    const doesUserExist = checkIfUserExistService(response.email);

    if (!doesUserExist) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    req.user = response;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }
};

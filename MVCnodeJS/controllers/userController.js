import usersService from '../services/userService.js';
import tokenService from '../services/tokenService.js';

export const createUser = async (req, res) => {
  res.json(await usersService.createUser(req.body.username, req.body.password, req.body.displayName, req.body.profilePic));
};

export const getUserDetails = async (req, res) => {
  
  try {
    const username = await tokenService.isLoggedIn(req.headers.authorization);
    res.json(await usersService.getUserDetails(req.params.username));
  } catch (error) {
    res.status(401).json({ error: "Unauthorized", status: 401 });
  }
};

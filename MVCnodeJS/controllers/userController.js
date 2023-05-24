import usersService from '../services/userService.js';


export const createUser = async (req, res) => {
  res.json(await usersService.createUser(req.body.username,req.body.password, req.body.displayName, req.body.profilePic));
  
};
export const getUserDetails = async (req,res)=>{ 
  // add jwt block.
  res.json(await usersService.getUserDetails(req.params.username))
}
import tokenService from '../services/tokenService.js';


export const getToken = async (req, res) => {
  res.json(await tokenService.getToken(req.body.username,req.body.password));
   
};

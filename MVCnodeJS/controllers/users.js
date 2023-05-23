import usersService from '../services/users'
const createUser = async (req, res) => {
res.json(await usersService.createUser(req.body.username, req.body.password,req.body.displayName,req.body.profilePic))
}
module.exports = {createUser}
import usersService from '../services/userService.js';
import jwt from 'jsonwebtoken';
async function getToken(username, password){
if(await usersService.isLoginValid(username,password)){
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return {token, status:201};
}
return {error: 'Invalid username and/or password', status: 404};

}
//remember to try catch this function
function isLoggedIn(token){
        // Verify the token is valid
        const username = jwt.verify(token, process.env.JWT_SECRET);
        // Token validation was successful. Continue to the actual function (index)
        console.log('The logged in user is: ' + username)
        return username;
       
    }
    export default { getToken, isLoggedIn };
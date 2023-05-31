import usersService from '../services/userService.js';
import jwt from 'jsonwebtoken';

async function getToken(username, password) {
  try {
    if (await usersService.isLoginValid(username, password)) {
      const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return { token, status: 200 };
    }
    return { error: 'Invalid username and/or password', status: 404 };
  } catch (error) {
    // Handle any exceptions that occur during token generation
    return { error: 'Internal server error', status: 500 };
  }
}

async function isLoggedIn(tokenHeader) {
  const extractedTokenString = tokenHeader.split(" ")[1]
  //const extractToken = JSON.parse(extractedTokenString[1])
  //const extractedToken = extractToken.token
  try {
    // Verify the token is valid
    const username = jwt.verify(extractedTokenString, process.env.JWT_SECRET);
    // Token validation was successful. Continue to the actual function (index)
    return username.username;
  } catch (error) {
    // Handle any exceptions that occur during token verification
    console.error('Error verifying token:', error);
    throw error;
  }
}

//change
export default { getToken, isLoggedIn };

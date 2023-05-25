import usersService from '../services/userService.js';
import jwt from 'jsonwebtoken';

async function getToken(username, password) {
  try {
    if (await usersService.isLoginValid(username, password)) {
      const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return { token, status: 201 };
    }
    return { error: 'Invalid username and/or password', status: 404 };
  } catch (error) {
    // Handle any exceptions that occur during token generation
    console.error('Error generating token:', error);
    throw error;
  }
}

async function isLoggedIn(tokenHeader) {
  const extractedTokenString = tokenHeader.split(" ")
  const extractToken = JSON.parse(extractedTokenString[1])
  const extractedToken = extractToken.token
  try {
    // Verify the token is valid
    const username = jwt.verify(extractedToken, process.env.JWT_SECRET);
    // Token validation was successful. Continue to the actual function (index)
    return username.username;
  } catch (error) {
    // Handle any exceptions that occur during token verification
    console.error('Error verifying token:', error);
    throw error;
  }
}

export default { getToken, isLoggedIn };

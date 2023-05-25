import tokenService from '../services/tokenService.js';
import chatService from "../services/chatService.js";

export async function getChats(req, res) {
  try {
    const username = await tokenService.isLoggedIn(req.headers.authorization);
    res.json(await chatService.getChats(username));
  } catch (error) {
    res.status(400).json({ error: 'Unauthorized' });
  }
}

export async function createChat(req, res) {
  try {
    const username = await tokenService.isLoggedIn(req.headers.authorization);
    // Create a new chat based on the request body
    const chat = await chatService.createChat(req, username); // Pass req instead of req.body
    
    // Return the created chat as a response
    res.status(201).send(chat);
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function getChatById(req, res) {
  try {
    const username = await tokenService.isLoggedIn(req.headers.authorization);
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
  try{
    const chat =  await chatService.getChatById(req.params.id);
    console.log(chat);
    //console.log(chat);
    res.status(200).send(chat);
  } catch (error) {
    res.status(500).json({ error: 'internal server error' });
  }
}


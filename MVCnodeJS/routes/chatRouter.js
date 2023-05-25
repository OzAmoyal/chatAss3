
import { getChats, createChat,getChatById } from '../controllers/chatController.js';
import { sendMessage,getMessages } from '../controllers/messageController.js';


import express from 'express';

const chatRouter = express.Router();
chatRouter.post('/', createChat);
chatRouter.get('/', getChats);
chatRouter.get('/:id', getChatById);
chatRouter.post('/:id/Messages', sendMessage);
chatRouter.get('/:id/Messages', getMessages);

export default chatRouter;


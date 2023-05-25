
import { getChats, createChat,getChatById } from '../controllers/chatController.js';


import express from 'express';

const chatRouter = express.Router();
chatRouter.post('/', createChat);
chatRouter.get('/', getChats);
chatRouter.get('/:id', getChatById);

export default chatRouter;


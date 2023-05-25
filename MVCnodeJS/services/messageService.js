
import messageModel from '../models/messageModel.js';
import chatModel from '../models/chatModel.js';
import userService from './userService.js';

async function sendMessage(chatId, username, message) {
    
    const getUser = await userService.getUserDetails(username);
    // Fetch all the chats from the database
    const chat = await chatModel.findById(chatId);
    // Create a new message
    const newMessage = new messageModel({
        chat: chatId,
        sender: getUser,
        content: message
    });
    // Save the message to the database
    const savedMessage = await newMessage.save();
    // Add the message to the chat
    chat.messages.push(savedMessage);
    // Save the chat
    await chat.save();
    // Return the message
    return savedMessage;
}
export default {sendMessage};

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

async function getMessages(chatId) {
    const messages=[];
    const chat = await chatModel.findById(chatId);   
    if(chat.messages.length===0){
        return messages;
    } 
    const getMessages = async function(chat){
        const messagePromises = chat.messages.map(async (message) => {
        try {
          const messageDetails = await messageModel.findById(message._id);
          return messageDetails;
        } catch (error) {
          console.error("Error fetching message details:", error);
          throw error; // Rethrow the error to be caught in the outer try-catch block
        }
      });
      const returnValue=await Promise.all(messagePromises);
      return returnValue;
    }
    messages = await getMessages(chat);
    return messages;
}


export default {sendMessage, getMessages};
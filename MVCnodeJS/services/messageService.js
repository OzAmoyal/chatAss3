
import messageModel from '../models/messageModel.js';
import chatModel from '../models/chatModel.js';
import userService from './userService.js';
import UserModel from '../models/userModel.js';

async function sendMessage(chatId, username, message) {
    
    const getUser = await userService.getFullUserDetails(username);
    // Fetch all the chats from the database
    const chat = await chatModel.findById(chatId);
    // Check if the user is a part of the chat
    if (!chat.users.includes(getUser._id)) {
        throw new Error("Unauthorized");
    }
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
    return {id:savedMessage._id.toString(),sender:{username:getUser.username,displayName:getUser.displayName,profilePic:getUser.profilePic},content:savedMessage.content,created:savedMessage.created};
}

async function getMessages(chatId,username) {
    var messages=[];
    const chat = await chatModel.findById(chatId);
    const userPromises = chat.users.map(async (user) => {
      try {
        const userDetails = await UserModel.findById(user._id);
        
        return {username:userDetails.username,displayName:userDetails.displayName,profilePic:userDetails.profilePic};
      } catch (error) {
        console.error("Error fetching user details:", error);
        throw error; // Rethrow the error to be caught in the outer try-catch block
      }
    });
    var users=await Promise.all(userPromises);
    if(!users.find(u => u.username === username)){
      throw new Error("Unauthorized");
      }
    if(chat.messages.length===0){
        return messages;
    } 
    const getMessages = async function(chat){
        const messagePromises = chat.messages.map(async (message) => {
        try {
          const messageDetails = await messageModel.findById(message._id);
          const senderDetails = await UserModel.findById(messageDetails.sender);
          return {id:messageDetails._id.toString(),sender:{username:senderDetails.username},content:messageDetails.content,created:messageDetails.created};
        } catch (error) {        
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
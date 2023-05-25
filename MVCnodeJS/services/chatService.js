import chatModel from '../models/chatModel.js';
import userModel from '../models/userModel.js';
import * as messageModel from '../models/messageModel.js';
import userService from '../services/userService.js';
async function getChats(username){
    try {
      // Fetch all the chats from the database
      const chats = await chatModel.find({users: username});
      // Return the chats as a response
      res.json(chats);
    } catch (error) {
      // Handle any errors that occur
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createChat(req, username){
    try {

        const otherUser= await userService.getUserDetails(req.body.username);

        // Create a new chat
        const myUser= await userService.getUserDetails(username);
 
        const chat = new chatModel({users: [myUser, otherUser], messages: []});

        // Save the chat to the database
        const savedChat = await chat.save();
        const responseChat = savedChat.toObject();
    
        const responseJson = { id: responseChat._id, user: otherUser };
       
        return responseJson;
  /*
        // Return a 201 response with the saved chat
        res.status(201).json(responseJson);
        */} catch (error) {
        // Handle errors
        res.status(500).json({ error: 'Internal server error' });
        
        }
}

    async function getChatById(otherUserID){
        try {
        // Fetch the chat by id
        const chat = await chatModel.findById(otherUserID);
        const getAnswer = async(chat) => {
            const finalAnswer = {
            id: chat._id.toString(), // Convert _id to string
            users: chat.users.map(async(user) =  userModel.findById(user._id)), 
            messages: chat.messages.map(async (message)=> messageModel.findById(message._id))
        }
        return finalAnswer;
      };
      const finalAnswer = await getAnswer(chat);
      return finalAnswer;
        } catch (error) {
        throw error;
        }
    }

export default {createChat, getChats, getChatById};



import chatModel from '../models/chatModel.js';
import userModel from '../models/userModel.js';
import messageModel from '../models/messageModel.js';
import userService from '../services/userService.js';


async function getChats(username){
    try {
      const getUser= await userService.getFullUserDetails(username);
      // Fetch all the chats from the database
      const chats = await chatModel.find({ users: { $in: [getUser._id] } })
      // Create an array to store the desired output
    const output = [];
    
    // Iterate over each chat object and extract the required information
// Iterate over each chat object and extract the required information
for (const chat of chats) {
  const chatObject = {
    id: chat._id.toString(),
    user: {},
    lastMessage: {}
  };

  const userPromises = chat.users.map(async (user) => {
    try {
      const userDetails = await userModel.findById(user._id);
      return {id:userDetails._id.toString(),username:userDetails.username,displayName:userDetails.displayName,profilePic:userDetails.profilePic};
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw error; // Rethrow the error to be caught in the outer try-catch block
    }
  });

  const messagePromises = chat.messages.map(async (message) => {
    try {
      const messageDetails = await messageModel.findById(message._id);
      const senderDetails = await userModel.findById(messageDetails.sender);
      return {id:messageDetails._id.toString(),sender:{username:senderDetails.username,displayName:senderDetails.displayName,profilePic:senderDetails.profilePic},content:messageDetails.content,created:messageDetails.created};
    } catch (error) {
      console.error("Error fetching message details:", error);
      throw error; // Rethrow the error to be caught in the outer try-catch block
    }
  });


  try {
    const users = await Promise.all(userPromises);
    const messages = await Promise.all(messagePromises);

    chatObject.user = users.find(u => u.username !== username);
    chatObject.lastMessage = messages.length > 0 ? {id:messages[messages.length - 1].id,created:messages[messages.length - 1].created,content:messages[messages.length - 1].content} : null;


    output.push(chatObject);
  } catch (error) {
    console.error("Error occurred while processing chat:", error);
    // Handle the error as appropriate or rethrow it to be caught by the caller
    throw error;
  }
}

return output;

    } catch (error) {
      // Handle any errors that occur
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createChat(req, username){
    try {

        const otherUser= await userService.getFullUserDetails(req.body.username);
        console.log(otherUser.username);
        if(!otherUser){
        throw new error("no such user");
        }

        // Create a new chat
        const myUser= await userService.getFullUserDetails(username);
        console.log(myUser.username)
        const chat = new chatModel({users: [myUser, otherUser], messages: []});
        console.log(chat)

        // Save the chat to the database
        const savedChat = await chat.save();
        const responseChat = savedChat.toObject();
    
        const responseJson = { id: responseChat._id, user:{ username:otherUser.username,profilePic:otherUser.profilePic,displayName:otherUser.displayName} };
       
        return responseJson;
  /*
        // Return a 201 response with the saved chat
        res.status(201).json(responseJson);
        */} catch (error) {
        throw error; // Rethrow the error to be caught in the outer try-catch block
        
        }
}

    async function getChatById(chatID){
      
        const chatObject = {
          id: chatID,
          users: [],
          messages: []
        };
        const chat = await chatModel.findById(chatID);
        const userPromises = chat.users.map(async (user) => {
          try {
            const userDetails = await userModel.findById(user._id);
            return {username:userDetails.username,displayName:userDetails.displayName,profilePic:userDetails.profilePic};
          } catch (error) {
            console.error("Error fetching user details:", error);
            throw error; // Rethrow the error to be caught in the outer try-catch block
          }
        });
        
        chatObject.users = await Promise.all(userPromises);
        const getMessages = async function(chat){
          const messagePromises = chat.messages.map(async (message) => {
          try {
            const messageDetails = await messageModel.findById(message._id);
            const senderDetails = await userModel.findById(messageDetails.sender);
            const returnedMessage = {id:messageDetails._id.toString(),sender:{username:senderDetails.username,displayName:senderDetails.displayName,profilePic:senderDetails.profilePic},content:messageDetails.content,created:messageDetails.created};
            return returnedMessage;
          } catch (error) {
            console.error("Error fetching message details:", error);
            throw error; // Rethrow the error to be caught in the outer try-catch block
          }
        });
        const returnValue=await Promise.all(messagePromises);
        return returnValue;
      }
        if(chat.messages.length===0){
          chatObject.messages=[];
        }
        else{
        chatObject.messages = await getMessages(chat);
        }
        return chatObject;
    }

async function deleteChatById(chatID){
  try{
    const deleteStatus = await chatModel.findByIdAndDelete(chatID);
    if(!deleteStatus){
      throw new error("no such chat");
    }
    return {status:204};
  }
  catch(error){
    throw error; // Rethrow the error to be caught in the outer try-catch block
  }
}

export default {createChat, getChats, getChatById,deleteChatById};



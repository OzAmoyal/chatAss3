import tokenService from "./tokenService.js";
import chatService from "./chatService.js";

async function initConnection(socket,userSockets) {
    socket.emit('identify', 'Hello client!')
    socket.on('token', async (token) => {
      const username= await tokenService.isLoggedIn(token);
      userSockets[username]=socket;
    });
    socket.on('message', async (data) => {
      const username= data.sender;
      const chat = await chatService.getChatById(data.chatID,username);
      const otherUser= chat.users.find(u => u.username !== username);
      if(userSockets[otherUser.username]){
        userSockets[otherUser.username].emit('update', {chatID:data.chatID,sender:username,content:data.content});
      }
    });
    socket.on('logout', async (token) => {
      const username= await tokenService.isLoggedIn(token);
      delete userSockets[username];
    });
  }
  export default {initConnection};
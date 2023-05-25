import React, { useEffect, useState } from 'react';
import ChatCurrentChatHeader from "./chatCurrentChatHeader/ChatCurrentChatHeader";
import ChatInputMessage from "./chatInputMessage/ChatInputMessage";
import ChatBody from "./chatBody/ChatBody";
import welcome_back from "./welcome_back_gif.gif";
import "./ChatRightMenu.css"

async function fetchChatMessages(selectedUser, token) {
  const response = await fetch(`http://localhost:50000/api/Chats/${selectedUser}`,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token, 
    },
  }).then((response) => response.json());
  return response
}

function ChatRightMenu({ selectedUser, setAuthenticated, authenticated, token,setChange }) {
  const [chatMessages, setChatMessages] = useState(null);
  const [message, setMessage] = useState(false);
  

  useEffect(() => {
    async function fetchChat() {
      if (selectedUser) {
        const chat = await fetchChatMessages(selectedUser,token);
        setChatMessages(chat);
      }
    }
    fetchChat();
  }, [selectedUser, token]);

  if (selectedUser === null) {
    return (
      <div className="col col-8 gif-container">
        <img src={welcome_back} className="gif" alt="welcome_back_GIF" />
      </div>
    );
  }


  const handleSendMessage = async (event) => {
    event.preventDefault();
    const message = {"msg": event.target[0].value};
    const sentMessage = await fetch(`http://localhost:50000/api/Chats/${selectedUser}/Messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token, 
      },
      body: JSON.stringify(message),
    }).then((response) => response.json());
    
    chatMessages.messages.push(sentMessage)
    setChatMessages(chatMessages)
    setMessage(true)
    setChange(true)
    event.target[0].value = "";
  };



  return (
    <div className="col col-8">
      <div className="card">
        {chatMessages && chatMessages.users && (
          <ChatCurrentChatHeader userDetails={chatMessages.users[0].username===authenticated.username?chatMessages.users[1]:chatMessages.users[0]} />
        )}
        {chatMessages && chatMessages.messages && (
          <ChatBody chatMessages={chatMessages} authenticated={authenticated} />
        )}
      </div>
      <form onSubmit={handleSendMessage}>
        <ChatInputMessage message={message} setMessage={setMessage}></ChatInputMessage>
      </form>
    </div>
  );
  

}

export default ChatRightMenu;
